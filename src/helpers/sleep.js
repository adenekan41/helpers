/**
 * Gives you the ability to sleep a function in the
 * call stack before running other functions
 *
 * e.g: await sleep(() => alert('me'), 5000) // Runs after 5ms
 *
 * @param {Number} ms - Number of time in milliseconds
 * @returns {Promise} Returns a promise
 */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default sleep;
