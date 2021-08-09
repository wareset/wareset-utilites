var timeout = (t, e) => new Promise(o => setTimeout(() => o(e && e()), t || 0));

export default timeout;
export { timeout };
