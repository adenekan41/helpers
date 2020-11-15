/**
 * Allows you add multiple event listeners to an application
 *
 * e.g: addMultipleListeners(document.getElementById('first'),['touchstart','click'],() => {},false);
 *
 * @param {HTMLElement} element - element you want to add event
 * @param {Array} events - events its self
 * @param {Function} handler - a function to handle callback
 * @param {Boolean} useCapture - decides use capture or not
 * @param {Array} args - Other arguments
 * @returns {void}
 */
const addMultipleListeners = (element, events, handler, useCapture, args) => {
	if (!(events instanceof Array)) {
		throw new Error(
			'addMultipleListeners: ' +
				'supply an array of eventstrings ' +
				'(like ["click","mouseover"])'
		);
	}
	//create a wrapper to be able to use additional arguments
	let handlerFn = function (e) {
		handler.apply(this, args && args instanceof Array ? args : []);
	};
	for (let i = 0; i < events.length; i += 1) {
		element.addEventListener(events[i], handlerFn, useCapture);
	}
};

export default addMultipleListeners;
