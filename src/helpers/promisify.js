/**
 * Gives you the ability to promisify a normal function
 * setting also the resolve and reject
 *
 * e.g: pause(() => alert('me'), 5000) // Runs after 5ms
 *
 * @param {Function} func- callback to run
 * @returns {Promise} Returns a promise
 */
const promisify = func => (...args) =>
	new Promise((resolve, reject) =>
		func(...args, (err, result) => (err ? reject(err) : resolve(result)))
	);

export default promisify;
