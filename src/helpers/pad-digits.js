/**
 *
 * @param {Number} number
 * @param {Number} digits
 */

const padDigits = (number, digits) => {
	return (
		Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
	);
};

export default padDigits;
