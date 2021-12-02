// setTimeout(() => {}, 1000 * 60 * 60 * 60)

console.clear()

const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync

const jsonParse = (v) => v[0] === '"' ? JSON.parse(v) : v
const existsStatSync = (
  directory
) => {
  try {
    return fs.statSync(directory)
  } catch (e) {}
  return false
}
const removeSync = (filepath) => {
  const stat = existsStatSync(filepath)
  if (stat) {
    if (stat.isDirectory()) {
      fs.readdirSync(filepath).forEach((name) => {
        removeSync(path.resolve(filepath, name))
      })
      fs.rmdirSync(filepath)
    } else fs.unlinkSync(filepath)
  }

  return !!stat
}
const getPackageJson = (dir) =>
  JSON.parse(fs.readFileSync(path.resolve(dir, 'package.json')).toString())
const setPackageJson = (dir, obj) =>
  fs.writeFileSync(path.resolve(dir, 'package.json'), JSON.stringify(obj, null, 2))

const DIR_ROOT = __dirname
// const PACKAGE_ROOT = 'wareset-utilites'
const DIR_PACKAGES = path.resolve(DIR_ROOT, 'packages')
const devDependencies = getPackageJson(DIR_ROOT).devDependencies
delete devDependencies.lerna

const packagesNamesObj = {}
execSync('git status --porcelain=v1', { cwd: DIR_ROOT, shell: true })
  .toString().replace(/\s+$/, '').split(/[\r\n]+/)
  .forEach((v) => {
    const gitpath = jsonParse(v.slice(2).trim())
    if (/^packages[\\/]+/.test(gitpath)) {
      const name = gitpath.split(/[\\/]+/)[1]
      // if (name !== PACKAGE_ROOT) {
      if (!(name in packagesNamesObj)) packagesNamesObj[name] = { any: false, src: false }
      if (/^packages[\\/]+[^\\/]+[\\/]+src[\\/]+/.test(gitpath)) {
        packagesNamesObj[name].src = true
      } else {
        packagesNamesObj[name].any = true
      }
      // }
    }
  })

for (const name in packagesNamesObj) {
  const state = packagesNamesObj[name]
  const packagepath = path.resolve(DIR_PACKAGES, name)
  if (existsStatSync(packagepath)) {
    console.log('PACKAGE: ' + name)

    fs.readdirSync(packagepath, { withFileTypes: true }).forEach((dirent) => {
      const name = dirent.name
      if (dirent.isFile() && /^index\./.test(name) ||
        dirent.isDirectory() && !/^(?:src|node_modules|__tests__)$/.test(name)) {
        console.log(' REMOVE: ' + name)
        removeSync(path.resolve(packagepath, name))
      }
    })

    const packagejson = getPackageJson(packagepath)
    packagejson.devDependencies = devDependencies
    if (state.src) {
      const version = packagejson.version.split('-')[0].split('.').map(Number)
      version[2]++
      if (version[2] > 999) version[1]++, version[2] = 0
      packagejson.version = version.join('.') + '-rc.0'
    }

    setPackageJson(packagepath, packagejson)

    execSync(
      `git add . && git commit -m "autochange: ${name}" && npm run build && sleep 1`,
      { stdio: ['ignore', 'inherit', 'inherit'], cwd: packagepath, shell: true }
    )
  }
}

const packages = {}
const PACKAGES = fs.readdirSync(DIR_PACKAGES)
PACKAGES.forEach((name) => {
  // console.log(name)
  const packagepath = path.resolve(DIR_PACKAGES, name)
  const packagejson = getPackageJson(packagepath)
  packagejson.version = packagejson.version.split('-')[0]
  packages[name] = { packagepath, packagejson }
})

// console.log(packages)

for (const name in packages) {
  // if (name !== PACKAGE_ROOT) {
  const { packagepath, packagejson } = packages[name]
  console.log(name)
  if (packagejson.dependencies) {
    for (const pkg in packagejson.dependencies) {
      if (/^@wareset-utilites[/]./.test(pkg)) {
        const name2 = pkg.split('/')[1].trim()
        if (!(name2 in packages)) throw new Error([pkg, name2, packagejson.dependencies[pkg]])
        else {
          // console.log(pkg, name2, packagejson.dependencies[pkg])
          packagejson.dependencies[pkg] = packages[name2].packagejson.version
        }
      }
    }
  }
  setPackageJson(packagepath, packagejson)
  const git = execSync(
    'git status --porcelain=v1',
    { cwd: packagepath, shell: true }
  ).toString()

  const reg = new RegExp('packages[\\\\/]+' + name + '[\\/]')
  if (reg.test(git)) {
    try {
      execSync(
        `git add . && git commit -m "autobuild: ${name}/${packagejson.version}"`,
        { stdio: ['ignore', 'inherit', 'inherit'], cwd: packagepath, shell: true }
      )
    } catch (e) {}
  }
  // }
}

execSync(
  'git push',
  { stdio: ['ignore', 'inherit', 'inherit'], cwd: DIR_ROOT, shell: true }
)

const publish = () => {
  for (const name in packages) {
    // if (name !== PACKAGE_ROOT) {
    const { packagepath } = packages[name]
    try {
      execSync(
        'npm publish && sleep 1',
        { stdio: ['ignore', 'inherit', 'inherit'], cwd: packagepath, shell: true }
      )
    } catch (e) {}
  }
}
publish()
