/**
 * Gives you the ability to truncate a string
 *
 * e.g: pause('i am a boy', 5) // Runs i am a ....
 *
 * @param {String} text - Text passed into string
 * @param {Number} n - number to truncate
 * @returns {String} Returns a truncated string
 */

const trunc = (text, n) => {
	return text.substr(0, n - 1) + (text.length >= n ? `...` : '');
};

export default trunc;
