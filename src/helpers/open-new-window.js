/**
 * @function
 * @default
 * @param {*} location
 * @param {*} height
 * @param {*} width
 */
const openNewWindow = (location, height, width) => {
	let strWindowFeatures = `location=yes,height=${height || 570},width=${
			width || 520
		},scrollbars=yes,status=yes`,
		URL =
			'https://www.linkedin.com/cws/share?mini=true&amp;url=' + location.href;
	return window.open(URL, '_blank', strWindowFeatures);
};

export default openNewWindow;
