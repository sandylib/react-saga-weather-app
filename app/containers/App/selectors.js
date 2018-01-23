/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentCity = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentCity')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectWeathers = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['cityData', 'weathers'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectCurrentCity,
  makeSelectLoading,
  makeSelectError,
  makeSelectWeathers,
  makeSelectLocation,
};
