var stacktrace = () => ('' + Error().stack).split(/\s*\n+\s*/).slice(2);

export default stacktrace;
export { stacktrace };
