import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    constructor(props){
        super(props);
        this.props.loadWeather("Bangalore");
        console.log(this.props);
        

        this.state = {
            selectedOption : "degreeC",
        }
    }
    render() {
        return (
        <div className="home">
            <div className="locationContainer">
                <span>Location : </span>
                <input type="text"/>
                <label>
                <input type="radio" value="degreeC" checked={this.state.selectedOption === "degreeC"} onChange = {this.handleOptionChange.bind(this)}/>
                    &#176;C
                </label>
                <label>
                <input type="radio" value="degreeF" checked={this.state.selectedOption === "degreeF"} onChange = {this.handleOptionChange.bind(this)}/>
                    &#176;F
                </label>
            </div>
            <div className="weatherDetails">
                <div className="temperature">Temp</div  >
                <div>
                    <p><label>Precipitaion : </label></p>
                    <p><label>Humidity : </label></p>
                    <p><label>Wind : </label></p>
                </div>
            </div>
        </div>
        );
    }

    handleOptionChange(changeEvent){
        this.setState({
            selectedOption : changeEvent.target.value
        })
    }
}

export default Home;
