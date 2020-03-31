/**
 * @function
 * @default
 * @param {*} obj
 * @returns {Boolean}
 */
const isEmpty = obj => {
	// get if there is a key in the obj either an object or array
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) return false;
	}
	return true;
};

export default isEmpty;
