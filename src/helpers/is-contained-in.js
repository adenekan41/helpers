/**
 * Check if the value or item of an array is contained
 * in the other array
 *
 * e.g: isContainedIn([2,3,4], [2,3,4]) // True
 * isContainedIn([2,3,4,5], [2,3,4]) // false
 *
 * @param {Array} arr - The main array
 * @param {Array} comparingArray - Array to compare with
 * @returns {Boolean} Returns a boolean if the array contains in the other
 */

const isContainedIn = (arr, comparingArray) => {
	for (const v of new Set(arr)) {
		if (
			!comparingArray.some(e => e === v) ||
			arr.filter(e => e === v).length >
				comparingArray.filter(e => e === v).length
		)
			return false;
	}
	return true;
};

export default isContainedIn;
