/**
 * @function
 * @default
 * @param {*} array
 * @returns {Array}
 */
const uniqArray = array => {
	return [...new Set(array)];
};

export default uniqArray;
