/**
 * @callback Encryption
 * @param {string} e - encryption value
 * @returns {string} Returns a the encrypted string
 */

/**
 * Gives the ability to encode a string
 * A polyfill that works like window.btoa
 *
 * e.g: encode('mynameiswakanda') // "bXluYW1laXN3YWthbmRh"
 *
 * @type {Encryption}
 * @type {typeof utf8encode}
 */
const keyStr =
	'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789+/=';
export const encode = e => {
	let initialString = '';
	let n;
	let r;
	let i;
	let s;
	let o;
	let u;
	let a;
	let f = 0;
	let m = utf8encode(e);
	while (f < m.length) {
		n = m.charCodeAt(f++);
		r = m.charCodeAt(f++);
		i = m.charCodeAt(f++);
		s = n >> 2;
		o = ((n & 3) << 4) | (r >> 4);
		u = ((r & 15) << 2) | (i >> 6);
		a = i & 63;
		if (isNaN(r)) {
			u = a = 64;
		} else if (isNaN(i)) {
			a = 64;
		}
		initialString =
			initialString +
			keyStr.charAt(s) +
			keyStr.charAt(o) +
			keyStr.charAt(u) +
			keyStr.charAt(a);
	}
	return initialString;
};

/**
 * Gives the ability to decode an enoded string
 * A polyfill that works like window.atob
 *
 * e.g: decode("bXluYW1laXN3YWthbmRh") // 'mynameiswakanda'
 *
 * @type {Encryption}
 * @type {typeof utf8decode}
 */
export const decode = e => {
	let t = '';
	let n;
	let r;
	let i;
	let s;
	let o;
	let u;
	let a;
	let f = 0;
	let m = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
	while (f < m.length) {
		s = keyStr.indexOf(m.charAt(f++));
		o = keyStr.indexOf(m.charAt(f++));
		u = keyStr.indexOf(m.charAt(f++));
		a = keyStr.indexOf(m.charAt(f++));
		n = (s << 2) | (o >> 4);
		r = ((o & 15) << 4) | (u >> 2);
		i = ((u & 3) << 6) | a;
		t += String.fromCharCode(n);
		if (u != 64) {
			t += String.fromCharCode(r);
		}
		if (a != 64) {
			t += String.fromCharCode(i);
		}
	}
	return utf8decode(t);
};

/**
 * @type {Encryption}
 */
const utf8encode = e => {
	e = e.replace(/\r\n/g, '\n');
	let t = '';
	for (let n = 0; n < e.length; n++) {
		const r = e.charCodeAt(n);
		if (r < 128) {
			t += String.fromCharCode(r);
		} else if (r > 127 && r < 2048) {
			t += String.fromCharCode((r >> 6) | 192);
			t += String.fromCharCode((r & 63) | 128);
		} else {
			t += String.fromCharCode((r >> 12) | 224);
			t += String.fromCharCode(((r >> 6) & 63) | 128);
			t += String.fromCharCode((r & 63) | 128);
		}
	}
	return t;
};

/**
 * @type {Encryption}
 */
const utf8decode = e => {
	let t = '';
	let n = 0;
	let c2;
	let c1;
	let r = (c1 = c2 = 0);
	while (n < e.length) {
		r = e.charCodeAt(n);
		if (r < 128) {
			t += String.fromCharCode(r);
			n++;
		} else if (r > 191 && r < 224) {
			c2 = e.charCodeAt(n + 1);
			t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));

			n += 2;
		} else {
			c2 = e.charCodeAt(n + 1);
			c3 = e.charCodeAt(n + 2);
			t += String.fromCharCode(((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			n += 3;
		}
	}
	return t;
};
