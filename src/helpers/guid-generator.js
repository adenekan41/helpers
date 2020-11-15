/**
 * Gives you the ability to create a 'Globally Unique Identifier' from S4 encryptions
 *
 * e.g: guidGenerator() // 4456-4545-4343-55e3455
 *
 * @returns {String} Returns a Unique Identifier
 */
const guidGenerator = () => {
	const S4 = () => {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
};

export default guidGenerator;
