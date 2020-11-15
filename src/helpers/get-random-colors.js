/**
 * Gives you the ability to get random HEX codes
 *
 * e.g: getRandomColor() // #fff
 *
 * @returns {String} Returns a random hex code
 */
const getRandomColor = () => {
	return `#${(((1 << 24) * Math.random()) | 0 | 1).toString(16)}`;
};

export default getRandomColor;
