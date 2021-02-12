var timeout = (msec = 0, callback = () => {}) => new Promise(res => setTimeout(() => res(callback()), msec));

export default timeout;
export { timeout };
