export const inBrowser = () => typeof window !== 'undefined';
export const inWeex = () =>
	typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
export const weexPlatform = () =>
	inWeex() && WXEnvironment.platform.toLowerCase();
export const isAndroid = () =>
	(UA && UA.indexOf('android') > 0) || weexPlatform() === 'android';
export const isIOS = () =>
	(UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform() === 'ios';

export const isOpera = () =>
	(!!window.opr && !!opr.addons) ||
	!!window.opera ||
	navigator.userAgent.indexOf(' OPR/') >= 0;

export const isFirefox = () => typeof InstallTrigger !== 'undefined';

export const isSafari = () =>
	/constructor/i.test(window.HTMLElement) ||
	(function(p) {
		return p.toString() === '[object SafariRemoteNotification]';
	})(
		!window['safari'] ||
			(typeof safari !== 'undefined' && safari.pushNotification)
	);

export const isIE = () => /*@cc_on!@*/ false || !!document.documentMode;

export const isEdge = () => !isIE && !!window.StyleMedia;

export const isChrome = () =>
	!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
export const isEdgeChromium = () =>
	isChrome && navigator.userAgent.indexOf('Edg') != -1;

// Blink engine detection
export const isBlink = () => (isChrome || isOpera) && !!window.CSS;
