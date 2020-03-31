/**
 * @default
 * @param {*} fn
 * @param {*} context
 * @param  {...any} boundArgs
 * @returns {funtion Bind}
 * @function
 */
const bind = (fn, context, ...boundArgs) => (...args) =>
	fn.apply(context, [...boundArgs, ...args]);

export default bind;
