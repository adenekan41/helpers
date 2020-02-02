/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { IsJsonString } from './is-json-string'

export const getState = state => {
  try {
    const serializedState = localStorage.getItem(state)
    if (
      serializedState === null ||
      !serializedState ||
      serializedState === undefined
    ) {
      return false
    }
    return IsJsonString(localStorage.getItem(state))
      ? JSON.parse(serializedState)
      : serializedState
  } catch (err) {
    console.error(err)
  }
}

export const setState = (state, value) => {
  try {
    return typeof value === 'string' || value.constructor === String
      ? localStorage.setItem(state, value)
      : localStorage.setItem(state, JSON.stringify(value))
  } catch (err) {
    console.error(err)
  }
}

export const clearState = state => {
  try {
    if (state) {
      return localStorage.removeItem(state)
    }
    return localStorage.clear()
  } catch (err) {
    console.error(err)
  }
}
