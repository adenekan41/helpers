/**
 * @function
 * @default
 * @param {*} str
 * @returns { Boolean}
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
