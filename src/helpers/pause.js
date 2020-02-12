export default function pause(callback, timeout = 0) {
	if (typeof callback !== 'function') return;
	return window.setTimeout(cb, timeout);
}
