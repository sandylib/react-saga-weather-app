/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectCityname = () => createSelector(
  selectHome,
  (homeState) => homeState.get('cityname')
);

export {
  selectHome,
  makeSelectCityname,
};
