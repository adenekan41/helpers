/**
 * Gives you the ability to forces a function to wait a certain
 * amount of time before running again
 *
 * e.g: var m = debouce(() => {}, 3000) // Runs after 3ms
 *
 * @param {Function} func - The parsed cuntion
 * @param {Number} wait - Time to delay
 * @param {Boolean} immediate - Allows you to call immediately at some point
 * @returns {Function} Returns debounced function
 */
const debounce = (func, wait, immediate) => {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export default debounce;
