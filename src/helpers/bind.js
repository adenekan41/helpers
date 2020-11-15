/**
 * Creates a function that invokes fn with a given context,
 * optionally prepending any additional supplied parameters
 * to the arguments.
 *
 * e.g: https://www.30secondsofcode.org/js/s/bind
 *
 * @param {Function} fn - The context given to the fucntion
 * @param {unknown} context - Context it self
 * @param {any} boundArgs - prepend any additional supplied parameters to the arguments.
 * @returns {Function} Return a function that uses Function.prototype.apply() to apply the given context to fn.
 */
const bind = (fn, context, ...boundArgs) => (...args) =>
	fn.apply(context, [...boundArgs, ...args]);

export default bind;
