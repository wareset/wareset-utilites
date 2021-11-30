/* eslint-disable max-len */
console.clear()
console.log('Wareset-utilites: autobuild')

const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync

const DIR_ROOT = path.resolve(__dirname, '..')
console.log(DIR_ROOT)

const DEFAULT_DEV_DEPENDENCIES = (() => {
  const devDependencies = JSON.parse(
    fs.readFileSync(path.resolve(DIR_ROOT, 'package.json')).toString()
  ).devDependencies
  delete devDependencies.lerna
  return { ...devDependencies }
})()

console.log(DEFAULT_DEV_DEPENDENCIES)

const DIR_TEMPLATE = path.resolve(DIR_ROOT, 'scripts/template')

/* JEST */
const FILENAME_JEST = 'jest.config.js'
const FILE_TEMPLATE_JEST = path.resolve(DIR_TEMPLATE, FILENAME_JEST)

/* GITIGNORE */
const FILENAME_GITIGNORE = '.gitignore'
const FILE_TEMPLATE_GITIGNORE = path.resolve(DIR_TEMPLATE, FILENAME_GITIGNORE)

/* README */
const FILENAME_README = 'README.md'
const FILE_TEMPLATE_README = path.resolve(DIR_TEMPLATE, FILENAME_README)
const SOURCE_TEMPLATE_README = fs.readFileSync(FILE_TEMPLATE_README).toString()

/* PACKAGE_JSON */
const FILENAME_PACKAGE_JSON = 'package.json'
// prettier-ignore
const FILE_TEMPLATE_PACKAGE_JSON = path.resolve(DIR_TEMPLATE, FILENAME_PACKAGE_JSON)
// prettier-ignore
const SOURCE_TEMPLATE_PACKAGE_JSON = fs.readFileSync(FILE_TEMPLATE_PACKAGE_JSON).toString()

// console.log(SOURCE_TEMPLATE_README)

const DIR_PACKAGES = path.resolve(DIR_ROOT, 'packages')
const LS_PACKAGES = fs.readdirSync(DIR_PACKAGES)
// console.log(LS_PACKAGES)
for (const pakagename of LS_PACKAGES) {
  const DIR_PACKAGE = path.resolve(DIR_PACKAGES, pakagename)
  // console.log(DIR_PACKAGE)

  const LS_PACKAGE = fs.readdirSync(DIR_PACKAGE)
  // console.log(LS_PACKAGE)
  if (LS_PACKAGE.indexOf(FILENAME_JEST) < 0) {
    fs.copyFileSync(
      FILE_TEMPLATE_JEST,
      path.resolve(DIR_PACKAGE, FILENAME_JEST)
    )
  }

  if (LS_PACKAGE.indexOf(FILENAME_GITIGNORE) < 0) {
    fs.copyFileSync(
      FILE_TEMPLATE_GITIGNORE,
      path.resolve(DIR_PACKAGE, FILENAME_GITIGNORE)
    )
  }

  if (LS_PACKAGE.indexOf('src') < 0) {
    fs.mkdirSync(path.resolve(DIR_PACKAGE, 'src'))
  }

  if (LS_PACKAGE.indexOf(FILENAME_README) < 0) {
    fs.writeFileSync(
      path.resolve(DIR_PACKAGE, FILENAME_README),
      SOURCE_TEMPLATE_README.replace(/%NAME%/g, pakagename)
    )
  }

  const FILE_PACKAGE_JSON = path.resolve(DIR_PACKAGE, FILENAME_PACKAGE_JSON)
  if (LS_PACKAGE.indexOf(FILENAME_PACKAGE_JSON) < 0) {
    fs.writeFileSync(
      FILE_PACKAGE_JSON,
      SOURCE_TEMPLATE_PACKAGE_JSON.replace(/%NAME%/g, pakagename)
    )
  }
  // prettier-ignore
  const packageJson = JSON.parse(fs.readFileSync(FILE_PACKAGE_JSON).toString())
  if (
    !packageJson.devDependencies ||
    JSON.stringify(packageJson.devDependencies) !==
      JSON.stringify(DEFAULT_DEV_DEPENDENCIES)
  ) {
    packageJson.devDependencies = DEFAULT_DEV_DEPENDENCIES
    fs.writeFileSync(FILE_PACKAGE_JSON, JSON.stringify(packageJson, null, 2))
  }
}

const minority = (version) => {
  const vArr = version.split('.').map((v) => +v)
  vArr[2]++
  return vArr.join('.')
}

const PREXIF_DOG = '@wareset-utilites/'
const autobuild = () => {
  console.clear()
  const actualVersions = {}
  let originVersions = {}

  for (const pakagename of LS_PACKAGES) {
    const DIR_PACKAGE = path.resolve(DIR_PACKAGES, pakagename)
    const FILE_PACKAGE_JSON = path.resolve(DIR_PACKAGE, FILENAME_PACKAGE_JSON)
    // prettier-ignore
    const packageJson = JSON.parse(fs.readFileSync(FILE_PACKAGE_JSON).toString())

    if (pakagename === 'wareset-utilites') {
      originVersions = packageJson.dependencies
    } else {
      actualVersions[PREXIF_DOG + pakagename] = packageJson.version
    }
  }

  console.log('actualVersions')
  console.log(actualVersions)
  console.log('originVersions')
  console.log(originVersions)

  for (const pakagename of LS_PACKAGES) {
    if (pakagename === 'wareset-utilites') continue
    const DIR_PACKAGE = path.resolve(DIR_PACKAGES, pakagename)
    const FILE_PACKAGE_JSON = path.resolve(DIR_PACKAGE, FILENAME_PACKAGE_JSON)
    // prettier-ignore
    const packageJson = JSON.parse(fs.readFileSync(FILE_PACKAGE_JSON).toString())

    // console.log(pakagename, packageJson.version)

    if (packageJson.dependencies) {
      let needUpdate = false
      Object.keys(packageJson.dependencies).forEach((packageName) => {
        const version = packageJson.dependencies[packageName]
        if (
          packageName in actualVersions &&
          actualVersions[packageName] !== version
        ) {
          needUpdate = true
          packageJson.dependencies[packageName] = actualVersions[packageName]
        }
      })
      if (needUpdate) {
        console.log('NEED_UPDATE: ', pakagename)
        // prettier-ignore
        fs.writeFileSync(FILE_PACKAGE_JSON, JSON.stringify(packageJson, null, 2))
      }
    }
  }

  for (const pakagename of LS_PACKAGES) {
    if (pakagename === 'wareset-utilites') continue
    const DIR_PACKAGE = path.resolve(DIR_PACKAGES, pakagename)
    const FILE_PACKAGE_JSON = path.resolve(DIR_PACKAGE, FILENAME_PACKAGE_JSON)
    // prettier-ignore
    const packageJson = JSON.parse(fs.readFileSync(FILE_PACKAGE_JSON).toString())

    const git = execSync('git status', {
      // stdio: ['ignore', 'inherit', 'inherit'],
      cwd  : DIR_ROOT,
      shell: true
    })
      .toString()
      .split(/\s*[\r\n]\s*/)
      .filter((v) => v.match(`packages[/\\\\]${pakagename}`))

    if (
      git.length &&
      packageJson.version === originVersions[PREXIF_DOG + pakagename]
    ) {
      console.log(pakagename, packageJson.version)
      console.log(git)
      packageJson.version = minority(packageJson.version)
      console.log(packageJson.version)
      fs.writeFileSync(FILE_PACKAGE_JSON, JSON.stringify(packageJson, null, 2))
      autobuild()
      return
    }
  }

  console.log('ALL VERSIONS UPDATED')

  for (const pakagename of LS_PACKAGES) {
    if (pakagename === 'wareset-utilites') continue
    const DIR_PACKAGE = path.resolve(DIR_PACKAGES, pakagename)
    const FILE_PACKAGE_JSON = path.resolve(DIR_PACKAGE, FILENAME_PACKAGE_JSON)
    // prettier-ignore
    const packageJson = JSON.parse(fs.readFileSync(FILE_PACKAGE_JSON).toString())

    const git = execSync('git status', {
      // stdio: ['ignore', 'inherit', 'inherit'],
      cwd  : DIR_ROOT,
      shell: true
    })
      .toString()
      .split(/\s*[\r\n]\s*/)
      .filter((v) => v.match(`packages[/\\\\]${pakagename}`))

    if (!git.length) continue
    console.log('UPDATING:')
    console.log(pakagename, packageJson.version)
    console.log(git)
    execSync(
      `npm run build && sleep 1 && git add . && git commit -m "autobuild: ${pakagename}/${packageJson.version}" && git push`,
      {
        stdio: ['ignore', 'inherit', 'inherit'],
        cwd  : DIR_PACKAGE,
        shell: true
      }
    )

    execSync('sleep 1 && npm publish && sleep 1', {
      stdio: ['ignore', 'inherit', 'inherit'],
      cwd  : DIR_PACKAGE,
      shell: true
    })
  }

  if (JSON.stringify(actualVersions) !== JSON.stringify(originVersions)) {
    for (const pakagename of LS_PACKAGES) {
      if (pakagename !== 'wareset-utilites') continue
      const DIR_PACKAGE = path.resolve(DIR_PACKAGES, pakagename)
      const FILE_PACKAGE_JSON = path.resolve(DIR_PACKAGE, FILENAME_PACKAGE_JSON)
      // prettier-ignore
      const packageJson = JSON.parse(fs.readFileSync(FILE_PACKAGE_JSON).toString())
      packageJson.dependencies = actualVersions
      packageJson.version = minority(packageJson.version)
      fs.writeFileSync(FILE_PACKAGE_JSON, JSON.stringify(packageJson, null, 2))

      console.log('UPDATING:')
      console.log(pakagename, packageJson.version)
      execSync(
        `npm run build && sleep 1 && git add . && git commit -m "autobuild: ${pakagename}/${packageJson.version}" && git push`,
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          cwd  : DIR_PACKAGE,
          shell: true
        }
      )

      execSync('sleep 1 && npm publish && sleep 1', {
        stdio: ['ignore', 'inherit', 'inherit'],
        cwd  : DIR_PACKAGE,
        shell: true
      })
    }
  }
}

autobuild()
