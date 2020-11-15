/**
 * Gives you the ability to copy a string to the clipboard
 *
 * e.g: copyToClipboard('Lorem ipsum'); // 'Lorem ipsum' copied to clipboard
 *
 * @param {String} str - Get string you want ot copy to clipboard
 * @returns {void}
 */
const copyToClipboard = str => {
	const el = document.createElement('textarea');
	el.value = str;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	const selected =
		document.getSelection().rangeCount > 0
			? document.getSelection().getRangeAt(0)
			: false;
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	if (selected) {
		document.getSelection().removeAllRanges();
		document.getSelection().addRange(selected);
	}
};

export default copyToClipboard;
