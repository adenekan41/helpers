/* eslint-disable consistent-return */
/* eslint-disable no-console */
import isJsonString from './is-json-string';

/**
 * @function
 * @param {*} state
 */
export const getSessionState = state => {
	try {
		const serializedState = sessionStorage.getItem(state);
		if (
			serializedState === null ||
			!serializedState ||
			serializedState === undefined
		) {
			return false;
		}
		return isJsonString(sessionStorage.getItem(state))
			? JSON.parse(serializedState)
			: serializedState;
	} catch (err) {
		console.error(err);
	}
};

/**
 * @function
 * @param {*} state
 * @param {*} value
 */
export const setSessionState = (state, value) => {
	try {
		return typeof value === 'string' || value.constructor === String
			? sessionStorage.setItem(state, value)
			: sessionStorage.setItem(state, JSON.stringify(value));
	} catch (err) {
		console.error(err);
	}
};

/**
 * @function
 * @param {*} state
 */
export const clearSessionState = state => {
	try {
		if (state) {
			return sessionStorage.removeItem(state);
		}
		return sessionStorage.clear();
	} catch (err) {
		console.error(err);
	}
};
