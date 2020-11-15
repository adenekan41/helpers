/**
 * Gives you the ability to convert Rem to px
 *
 * e.g: convertRemToPixels(0.0856) // '14px'
 * convertRemToPixels(0.0856, true) // 14
 *
 * @param {Number | String} rem - number of px to convert
 * @param {Boolean} noString - choose to either  add a string data to your return string
 * @returns {String | Number} Returns a promise
 */
const convertRemToPixels = (rem, noString = false) => {
	let remValue = parseFloat(rem) || 1,
		pxValue =
			remValue *
			parseFloat(getComputedStyle(document.documentElement).fontSize);

	return noString ? pxValue.toFixed(2) : `${pxValue.toFixed(2)}px`;
};

export default convertRemToPixels;
