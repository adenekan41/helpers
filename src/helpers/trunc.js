/**
 * @param {Strine} text
 * @param {String} n
 * @return {String}
 */
const trunc = (text, n) => {
	return text.substr(0, n - 1) + (text.length >= n ? `...` : '');
};

export default trunc;
