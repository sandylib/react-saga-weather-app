import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import WeatherPanel from 'components/WeatherPanel';

function WeatherList({ loading, error, weathers }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (weathers !== false) {
    return (<div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="">

            <h3>
              {weathers.city.name}, {weathers.city.country}
              <small> Lon: {weathers.city.coord.lon} Lat: {weathers.city.coord.lat} Population: {weathers.city.population}</small>
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <WeatherPanel key="1" useDayForecast={weathers.list[0]} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4">
          <WeatherPanel key="2" useDayForecast={weathers.list[1]} />
        </div>
        <div className="col-xs-4">
          <WeatherPanel key="3" useDayForecast={weathers.list[2]} />
        </div>
        <div className="col-xs-4">
          <WeatherPanel key="4" useDayForecast={weathers.list[3]} />
        </div>
      </div>
    </div>);
  }

  return null;
}

WeatherList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  weathers: PropTypes.any,
};

export default WeatherList;
