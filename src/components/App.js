import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as allActions from '../actions';
import Home from './home/Home';
import Header from './header/Header';

import './App.css';

//Container component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home loadWeather={this.props.loadWeather} data={this.props.weatherReducer.weatherData}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect (mapStateToProps, allActions)(App);
