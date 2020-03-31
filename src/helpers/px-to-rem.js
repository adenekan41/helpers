/**
 * @function
 * @default
 * @param {*} px
 * @param {*} noString
 */
const convertPxToRem = (px, noString = false) => {
	let pxValue = parseFloat(px) || 1,
		remValue =
			(1 / parseFloat(getComputedStyle(document.documentElement).fontSize)) *
			pxValue;

	return noString ? remValue.toFixed(2) : `${remValue.toFixed(2)}rem`;
};

export default convertPxToRem;
