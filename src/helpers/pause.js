/**
 * Gives you the ability to pause a function and
 * waiting time before runnings
 *
 * e.g: pause(() => alert('me'), 5000) // Runs after 5ms
 *
 * @param {Function} callback - callback to run
 * @param {Number} timeout - number to time to pause
 * @returns {Window} Returns a window set time out function
 */

const pause = (callback, timeout = 0) => {
	if (typeof callback !== 'function') return;
	return window.setTimeout(callback, timeout);
};

export default pause;
