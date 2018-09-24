import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedOption : "degreeC",
            tempC : null,
            tempF : null
        }
    }
    getWeatherDetails(event){
        if(event.target.value)
            this.props.loadWeather(event.target.value).then(()=>{
                this.setState(
                    {
                        tempC : (this.props.data.main.temp - 273.15).toFixed(2),
                        tempF : ((this.props.data.main.temp * 9/5) - 459.67).toFixed(2)
                    }
                )
            });
    }
    render() {
        console.log(this.props);
        return (
        <div className="home">
            <div className="locationContainer">
                <span>Location : </span>
                <input type="text" onBlur={this.getWeatherDetails.bind(this)}/>
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
                <div className="temperature">{(this.state.selectedOption === "degreeC"? this.state.tempC : this.state.tempF)}</div  >
                <div>
                    <p><label>Pressure : </label>{(this.props.data)?this.props.data.main.pressure : null} hpa</p>
                    <p><label>Humidity : </label> {(this.props.data)?this.props.data.main.humidity : null}% </p>
                    <p><label>Wind : </label> {(this.props.data)?this.props.data.wind.speed : null} mps</p>
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
