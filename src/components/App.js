import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as allActions from '../actions';
import Home from './Home/Home';
import './App.css';

class App extends Component {

  headerText = "Weather Report"
  constructor(props){
    super(props)
    
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.headerText}</h1>
        </header>
        <div>
          <Home loadWeather={this.props.loadWeather} data={this.props.weatherData}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect (mapStateToProps, allActions)(App);
