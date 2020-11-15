/**
 * Gives you the ability return an array of unique data
 *
 * @template T
 * @param {Array<T>} array - callback to run
 * @returns {Array<T>} Returns a unique array of set array
 */

const uniqArray = array => {
	return [...new Set(array)];
};

export default uniqArray;
