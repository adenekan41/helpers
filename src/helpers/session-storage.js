/* eslint-disable consistent-return */
/* eslint-disable no-console */
import isJsonString from './is-json-string';

/**
 * Helps you get the session state and
 * parse them automatically
 *
 * e.g: getState('token') // 12345678
 *
 * @param {String} key - session key
 * @returns {string | boolean | object | Array} Returns session value
 */
export const getSessionState = key => {
	try {
		const serializedState = sessionStorage.getItem(key);
		if (
			serializedState === null ||
			!serializedState ||
			serializedState === undefined
		) {
			return false;
		}
		return isJsonString(sessionStorage.getItem(key))
			? JSON.parse(serializedState)
			: serializedState;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Helps you save the session key and value and
 *
 * e.g: setState('token', 1234567)
 *
 * @param {String} key - session key
 * @param {string | boolean | object | Array} value - session value
 * @returns {void}
 */
export const setSessionState = (key, value) => {
	try {
		return typeof value === 'string' || value.constructor === String
			? sessionStorage.setItem(key, value)
			: sessionStorage.setItem(key, JSON.stringify(value));
	} catch (err) {
		console.error(err);
	}
};

/**
 * Clears the key and value in the session if a key is passed
 * if not it clears all session value
 *
 * e.g: clearState('token') // Removes token
 * clearState() // Removes all session value
 *
 * @param {String} key - session key
 * @returns {void}
 */
export const clearSessionState = key => {
	try {
		if (key) {
			return sessionStorage.removeItem(key);
		}
		return sessionStorage.clear();
	} catch (err) {
		console.error(err);
	}
};
