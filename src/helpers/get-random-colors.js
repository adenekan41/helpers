/**
 * @default
 * @function
 * @returns {Random Colors}
 */
const getRandomColor = () => {
	return `#${(((1 << 24) * Math.random()) | 0 | 1).toString(16)}`;
};

export default getRandomColor;
