/**
 * @function
 * @default
 * @param {*} rem
 * @param {*} noString
 */
const convertRemToPixels = (rem, noString = false) => {
	let remValue = parseFloat(rem) || 1,
		pxValue =
			remValue *
			parseFloat(getComputedStyle(document.documentElement).fontSize);

	return noString ? pxValue.toFixed(2) : `${pxValue.toFixed(2)}px`;
};

export default convertRemToPixels;
