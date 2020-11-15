/**
 * Check if a particular string is JSON verified
 *
 * e.g: isJsonString('{"b":"run"}') // True
 * isJsonString('"b:"run"}') // false
 *
 * @param {String} str - the data type
 * @returns {Boolean} Returns a boolean if its a JSON string
 */
const isJsonString = str => {
	try {
		const json = JSON.parse(str);
		return typeof json === 'object';
	} catch (e) {
		return false;
	}
};

export default isJsonString;
