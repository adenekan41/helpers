const bind = (fn, context, ...boundArgs) => (...args) =>
	fn.apply(context, [...boundArgs, ...args]);
export default bind;
