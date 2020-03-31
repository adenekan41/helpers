/**
 * @function
 * @default
 * @param {*} ms
 * @returns {Window}
 */
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export default sleep;
