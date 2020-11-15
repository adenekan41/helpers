/**
 * Allows you open a new link in a new window
 *
 * e.g: openNewWindow('https://google.com', 300, 300)
 *
 * @param {String} URL - Url of the location
 * @param {Number} height - height of window
 * @param {Number} width - width of window
 * @param {Number} options - added options for the window
 * @returns {Window} Returns Window
 */
const openNewWindow = (URL, height, width, options = {}) => {
	let strWindowFeatures = `location=yes,height=${height || 570},width=${
		width || 520
	},scrollbars=${options.scrollbars || 'yes'},status=${
		options.status || 'yes'
	},resizable=${options.resizable || 'yes'},menubar=${options.menubar}`;
	return window.open(URL, '_blank', strWindowFeatures);
};

export default openNewWindow;
