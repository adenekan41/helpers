export default bind = (fn, context, ...boundArgs) => (...args) =>
	fn.apply(context, [...boundArgs, ...args]);
