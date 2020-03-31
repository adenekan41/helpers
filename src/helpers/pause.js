/**
 * @function
 * @default
 * @param {*} callback
 * @param {*} timeout
 * @returns {Window}
 */
const pause = (callback, timeout = 0) => {
	if (typeof callback !== 'function') return;
	return window.setTimeout(cb, timeout);
};

export default pause;
