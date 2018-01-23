/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectWeathers, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import WeatherList from 'components/WeatherList';
import { requestWeathers } from '../App/actions';
import { changeCityname } from './actions';
import { makeSelectCityname } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (this.props.cityname && this.props.cityname.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, weathers } = this.props;
    const weatherListProps = {
      loading,
      error,
      weathers,
    };

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div>
                <form className="form-inline" onSubmit={this.props.onSubmitForm}>
                  <span className="form-group">
                    <label className="sr-only" htmlFor="location">City</label>
                    <input
                      id="cityname"
                      className="form-control"
                      type="text"
                      placeholder="type cityname here"
                      value={this.props.cityname}
                      onChange={this.props.onChangeCityname}
                      autoComplete="false"
                    />
                  </span>
                  <button type="submit" className="btn btn-primary">Search!</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <WeatherList {...weatherListProps} />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  weathers: PropTypes.oneOfType([
    PropTypes.object, //
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  cityname: PropTypes.string,
  onChangeCityname: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCityname: (evt) => dispatch(changeCityname(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(requestWeathers());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  weathers: makeSelectWeathers(),
  cityname: makeSelectCityname(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
