export const arrayRandomItem = array => {
	return array[(Math.random() * array.length) | 0];
};
export const arrayPickOne = (array, index) => {
	return array.splice(
		index >= 0 ? index : (Math.random() * array.length) | 0,
		1
	)[0];
};

export const arrayShuffleItems = array => {
	for (var i = array.length; i > 0; --i)
		array.push(array.splice((Math.random() * i) | 0, 1)[0]);
	return array;
};
export const arrayRemove = (arr, func) =>
	Array.isArray(arr)
		? arr.filter(func).reduce((acc, val) => {
				arr.splice(arr.indexOf(val), 1);
				return acc.concat(val);
		  }, [])
		: [];
export const join = (arr, separator = ',', end = separator) =>
	arr.reduce(
		(acc, val, i) =>
			i === arr.length - 2
				? acc + val + end
				: i === arr.length - 1
				? acc + val
				: acc + val + separator,
		''
	);
