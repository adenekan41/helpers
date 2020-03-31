/**
 * @function
 * @default
 * @param {*} cookie
 * @returns {Cookies to Object}
 */

const cookieToObject = cookie => {
	return cookie.split(/[;] */).reduce(function(result, pairStr) {
		const arr = pairStr.split('=');
		if (arr.length === 2) {
			result[arr[0]] = arr[1];
		}
		return result;
	}, {});
};

export default cookieToObject;
