/**
 * @default
 * @function
 * @param {*} element
 * @param {*} events
 * @param {*} handler
 * @param {*} useCapture
 * @param {*} args
 * @returns {Array}
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
	let handlerFn = function(e) {
		handler.apply(this, args && args instanceof Array ? args : []);
	};
	for (let i = 0; i < events.length; i += 1) {
		element.addEventListener(events[i], handlerFn, useCapture);
	}
};

export default addMultipleListeners;
