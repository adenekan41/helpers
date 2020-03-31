/**
 * @function
 * @default
 * @param {*} x
 * @returns {funtion parsing}
 */
const collectInto = x => (...args) => x(args);
export default collectInto;
