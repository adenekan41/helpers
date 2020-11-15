/**
 * Changes a function that accepts an array into a variadic function.
 *
 * e.g: https://www.30secondsofcode.org/js/s/collect-into
 *
 * @param {Function} fn - The  given  fucntion
 * @returns {Function}  return a closure that collects all inputs into an array-accepting function.
 */
const collectInto = fn => (...args) => fn(args);
export default collectInto;
