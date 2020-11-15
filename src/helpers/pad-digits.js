/**
 * Gives you the ability to add prefix to numbers
 *
 * e.g: padDigits(200, 5) // 00200
 *
 * @param {Number} number - number you need to pad
 * @param {Number} digits - the amout of paddings
 * @returns {Number} Returns Padded digit
 */

const padDigits = (number, digits) => {
	return (
		Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number
	);
};

export default padDigits;
