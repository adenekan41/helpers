/**
 * Gives you the ability to get random items from an array
 *
 * (e.g): arrayRandomItem([2,3,4,5]) // Returns 4
 * arrayRandomItem([2,3,4,'5']) // Returns '5'
 *
 * @param {Array} array - The array passed into the function
 * @returns {unknown} Returns a random item from the initial array
 */
export const arrayRandomItem = array => {
	return array[(Math.random() * array.length) | 0];
};

/**
 * Gives you the ability to randomly pick an item from an array
 * or specify from what index you want the item to be picked from.
 *
 * @param {Array} array - The array passed into the function
 * @param {Number} index - determines if you want to function to pick that index
 * @returns {unknown} Returns a random item from the initial array
 */
export const arrayPickOne = (array, index) => {
	return array.splice(
		index >= 0 ? index : (Math.random() * array.length) | 0,
		1
	)[0];
};

/**
 * Gives you the ability to remove anything from an array with a custom function
 * passed as a callback you can specific what conditions you want this array removed
 *
 * (e.g): arrayRemove([2,3,5,6], (item, index) => item === 3) // Returns [3]
 * arrayRemove([2,3,5,6], (_, index) => index < 1) // Returns [5,6]
 *
 * @template T
 * @param {Array<T>} arr - The array passed into the function
 * @param {Function} func - custom function passed as a callback
 * @returns {Array<T>} Returns arrays with conditons met
 */
export const arrayRemove = (arr, func) =>
	Array.isArray(arr)
		? arr.filter(func).reduce((acc, val) => {
				arr.splice(arr.indexOf(val), 1);
				return acc.concat(val);
		  }, [])
		: [];

/**
 * Gives you the ability to shuffle positions of an array, index
 * and also its items.
 *
 * @template T
 * @param {Array<T>} array - The array passed into the function
 * @returns {Array<T>} Returns a shuffled array from the initial array
 */
export const arrayShuffleItems = array => {
	for (var i = array.length; i > 0; --i)
		array.push(array.splice((Math.random() * i) | 0, 1)[0]);
	return array;
};

/**
 * Gives you the ability to remove a member of the array by value
 * ignoring all of its other items
 *
 * @template T
 * @param {Array<T>} array - The array passed into the function
 * @param {any<T>} value - the matching value you want removed
 * @returns {Array<T>} Returns one removed item matching the value from the initial array
 */
export const arrayRemoveItemOnce = (arr, value) => {
	var index = arr.indexOf(value);
	if (index > -1) {
		arr.splice(index, 1);
	}
	return arr;
};

/**
 * Gives you the ability to remove all members of the array by value
 *
 * @template T
 * @param {Array<T>} array - The array passed into the function
 * @param {any<T>} value - the matching value you want removed
 * @returns {Array<T>} Returns all removed item matching the value from the initial array
 */
export const arrayRemoveItemAll = (arr, value) => {
	var i = 0;
	while (i < arr.length) {
		if (arr[i] === value) {
			arr.splice(i, 1);
		} else {
			++i;
		}
	}
	return arr;
};

/**
 * Gives you the ability to give custom sperators to your array.
 *
 * @param {Array} arr - The array passed into the function
 * @param {string} separator - the required way you want array to be seperated
 * @param {string} end - The last sperator index
 * @returns {String} Returns array as a custom string
 */
export const arrayJoin = (arr, separator = ',', end = separator) =>
	arr.reduce(
		(acc, val, i) =>
			i === arr.length - 2
				? acc + val + end
				: i === arr.length - 1
				? acc + val
				: acc + val + separator,
		''
	);
