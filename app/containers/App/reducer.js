/*
 * AppReducer
 *
 */

import { fromJS } from 'immutable';

import {
  REQUEST_WEATHERS,
  REQUEST_WEATHERS_FAILED,
  REQUEST_WEATHERS_SUCCEEDED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentCity: false,
  cityData: {
    weathers: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHERS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['cityData', 'weathers'], false);
    case REQUEST_WEATHERS_SUCCEEDED:
      return state
        .setIn(['cityData', 'weathers'], action.weathers)
        .set('loading', false)
        .set('currentCity', action.cityname);
    case REQUEST_WEATHERS_FAILED:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
