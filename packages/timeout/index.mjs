var timeout = (msec = 1, callback = () => {}) => new Promise(res => setTimeout(() => res(callback()), msec));

export default timeout;
export { timeout };
