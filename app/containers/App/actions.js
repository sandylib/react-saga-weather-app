/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  REQUEST_WEATHERS,
  REQUEST_WEATHERS_SUCCEEDED,
  REQUEST_WEATHERS_FAILED,
} from './constants';

/**
 * Load the weathers, this action starts the request saga
 *
 * @return {object} An action object with a type of REQUEST_WEATHERS
 */
export function requestWeathers() {
  return {
    type: REQUEST_WEATHERS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} weathers The weathers data
 * @param  {string} cityname The current cityname
 *
 * @return {object}      An action object with a type of REQUEST_WEATHERS_SUCCEEDED passing the weathers
 */
export function requestWeatherSucceeded(weathers, cityname) {
  return {
    type: REQUEST_WEATHERS_SUCCEEDED,
    weathers,
    cityname,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of REQUEST_WEATHERS_FAILED passing the error
 */
export function requestWeatherFailed(error) {
  return {
    type: REQUEST_WEATHERS_FAILED,
    error,
  };
}
