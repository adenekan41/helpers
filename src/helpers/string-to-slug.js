/**
 * @function
 * @default
 * @param {*} str
 * @param {*} separator
 */
const stringToSlug = (str, separator) => {
	str = str.trim();
	str = str.toLowerCase();

	// remove accents, swap ñ for n, et
	const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
	const to = 'aaaaaaeeeeiiiioooouuuunc------';

	for (let i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	return str
		.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
		.replace(/-/g, separator);
};

export default stringToSlug;
