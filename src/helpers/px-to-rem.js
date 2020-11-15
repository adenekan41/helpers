/**
 * Gives you the ability to convert PX to rem
 *
 * e.g: convertPxToRem(14) // '0.0856rem'
 * convertPxToRem(14, true) // 0.0856
 *
 * @param {Number | String} px - number of px to convert
 * @param {Boolean} noString - choose to either  add a string data to your return string
 * @returns {String | Number} Returns a promise
 */
const convertPxToRem = (px, noString = false) => {
	let pxValue = parseFloat(px) || 1,
		remValue =
			(1 / parseFloat(getComputedStyle(document.documentElement).fontSize)) *
			pxValue;

	return noString ? remValue.toFixed(2) : `${remValue.toFixed(2)}rem`;
};

export default convertPxToRem;
