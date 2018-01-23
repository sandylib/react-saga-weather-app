/**
*
* WeatherPanel
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


function WeatherPanel({ useDayForecast }) {
  const getImgUrl = (iconName) => `http://openweathermap.org/img/w/${iconName}.png`;
  const getDateFormat = (time) => (new Date(time).toLocaleDateString());
  return (
    <div className="weather panel panel-primary">
      <div className="panel-heading">{getDateFormat(useDayForecast.dt * 1000)}
      </div>
      <div className="panel-body">
        <div>
          <p className="lead">
            <img src={getImgUrl(useDayForecast.weather[0].icon)} alt="" />
            {useDayForecast.temp.day}&#176;C {useDayForecast.weather[0].main}
          </p>
          <p>
            {useDayForecast.weather[0].description}&nbsp;&#126;&nbsp;
                  High: {useDayForecast.temp.max}&#176;C&nbsp;&#126;&nbsp;
                  Low: {useDayForecast.temp.min}&#176;C
              </p>
        </div>
      </div>
      <div className="panel-footer">
        <small>
              Day: {useDayForecast.temp.day}&#176;C&nbsp;&#126;&nbsp;
              Night: {useDayForecast.temp.night}&#176;C&nbsp;&#126;&nbsp;
              Pressure: {useDayForecast.pressure} hPa&nbsp;&#126;&nbsp;
              Humidity: {useDayForecast.humidity}%
          </small>
      </div>
    </div>
  );
}

WeatherPanel.propTypes = {
  useDayForecast: PropTypes.shape({
    dt: PropTypes.number,
    temp: PropTypes.shape({
      day: PropTypes.number,
      eve: PropTypes.number,
      max: PropTypes.number,
      min: PropTypes.number,
      morn: PropTypes.number,
      night: PropTypes.number,
    }),
    pressure: PropTypes.number,
    humidity: PropTypes.number,
    weather: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      main: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
    })),

  }),
};

export default WeatherPanel;
