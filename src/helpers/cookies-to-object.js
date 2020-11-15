/**
 * Gives you the ability to return cookies to object
 *
 * (e.g): cookieToObject('token=wwefwef2d23e2;page=loss') // Returns {token: 'wwefwef2d23e2', page: 'loss'}
 *
 * @param {String} cookie - The string passed into the function
 * @returns {Object} Returns cookies to object from the initial string
 */

const cookieToObject = cookie => {
	return cookie.split(/[;] */).reduce(function (result, pairStr) {
		const arr = pairStr.split('=');
		if (arr.length === 2) {
			result[arr[0]] = arr[1];
		}
		return result;
	}, {});
};

export default cookieToObject;
