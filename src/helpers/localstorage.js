/* eslint-disable consistent-return */
/* eslint-disable no-console */
import isJsonString from './is-json-string';

/**
 * Helps you get the localstorage state and
 * parse them automatically
 *
 * e.g: getState('token') // 12345678
 *
 * @param {String} key - localstorage key
 * @param {String} isSSR - check if the app is server side rendered and wait for the localstorage item to load
 * @returns {string | boolean | object | Array} Returns Localstorage value
 */
export const getState = (key, isSSR = false) => {
	try {
		const serializedState = !isSSR
			? localStorage.getItem(key)
			: process.browser && localStorage.getItem(key);
		if (
			serializedState === null ||
			!serializedState ||
			serializedState === undefined
		) {
			return false;
		}
		return isJsonString(serializedState)
			? JSON.parse(serializedState)
			: serializedState;
	} catch (err) {
		console.error(err);
	}
};

/**
 * Helps you save the localstorage key and value and
 *
 * e.g: setState('token', 1234567)
 *
 * @param {String} key - localstorage key
 * @param {string | boolean | object | Array} value - Localstorage value
 * @returns {void}
 */
export const setState = (key, value) => {
	try {
		return typeof value === 'string' || value.constructor === String
			? localStorage.setItem(key, value)
			: localStorage.setItem(key, JSON.stringify(value));
	} catch (err) {
		console.error(err);
	}
};

/**
 * Clears the key and value in the localstorage if a key is passed
 * if not it clears all localstorage value
 *
 * e.g: clearState('token') // Removes token
 * clearState() // Removes all localstorage value
 *
 * @param {String} key - localstorage key
 * @returns {void}
 */
export const clearState = key => {
	try {
		if (key) {
			return localStorage.removeItem(key);
		}
		return localStorage.clear();
	} catch (err) {
		console.error(err);
	}
};
