/**
 * Gives you the ability to scroll into view for an element
 *
 * @param {HTMLElement} element - element to scroll
 * @param {Object} options - parse options into document scroll
 * @returns {Document} Returns a scroll into view
 */

const smoothScroll = (element, options) => {
	document.querySelector(element).scrollIntoView({
		behavior: 'smooth',
		...options,
	});
};

export default smoothScroll;
