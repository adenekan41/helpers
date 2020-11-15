/**
 * Gives you the ability to check if any data type is empty
 *
 * e.g: isEmpty('') // True
 * isEmpty({}) // True
 *
 * @param {unknown} data - the data type
 * @returns {Boolean} Returns a boolean if its empty
 */
const isEmpty = data => {
	for (let key in data) {
		if (data.hasOwnProperty(key)) return false;
	}
	return true;
};

export default isEmpty;
