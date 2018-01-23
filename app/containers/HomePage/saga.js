/**
 * cityWeatherData
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { REQUEST_WEATHERS } from 'containers/App/constants';
import { requestWeatherSucceeded, requestWeatherFailed } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectCityname } from 'containers/HomePage/selectors';

/**
 * getWeathers request/response handler
 */
export function* getWeathers() {
  // Select username from store
  const cityname = yield select(makeSelectCityname());
  const requestURL = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&units=metric&&apikey=279b4be6d54c8bf6ea9b12275a567156`;
  try {
    // Call our request helper (see 'utils/request')
    const weathers = yield call(request, requestURL);
    yield put(requestWeatherSucceeded(weathers, cityname));
  } catch (err) {
    yield put(requestWeatherFailed(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* cityWeatherData() {
  yield takeLatest(REQUEST_WEATHERS, getWeathers);
}
