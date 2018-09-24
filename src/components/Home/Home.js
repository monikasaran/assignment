import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedOption : "degreeC",
            tempC : null,
            tempF : null,
            pressure : null,
            humidity : null,
            speed : null,
            errorFlag : false
        }
    }

    //This function will be called on blur of the input text box
    getWeatherDetails=(event)=>{        
        if(event.target.value)
            this.props.loadWeather(event.target.value).then(()=>{
                if(this.props.data){
                    if(this.props.data.cod === 200)
                        this.setState(
                            {
                                tempC : (this.props.data.main.temp - 273.15).toFixed(2),
                                tempF : ((this.props.data.main.temp * 9/5) - 459.67).toFixed(2),
                                pressure : this.props.data.main.pressure,
                                humidity : this.props.data.main.humidity,
                                speed : this.props.data.wind.speed,
                                errorFlag : false
                            }
                        )
                    else 
                    this.setState(
                        {
                            tempC : null,
                            tempF : null,
                            pressure : null,
                            humidity : null,
                            speed : null,
                            errorFlag: true
                        }
                    )
                }
            });
    }
    
    //This function is called on Change of radio button value
    handleOptionChange(changeEvent){
        this.setState({
            selectedOption : changeEvent.target.value
        })
    }
    render() {
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
                <div className="temperature">
                {
                    (this.state.selectedOption === "degreeC"? 
                    this.state.tempC : this.state.tempF)
                }
                </div  >
                <div>
                    <p><label>Pressure : </label>{this.state.pressure} hpa</p>
                    <p><label>Humidity : </label> {this.state.humidity}% </p>
                    <p><label>Wind : </label> {this.state.speed} mps</p>
                </div>
            </div>
            {(this.state.errorFlag)?
                <div className="error">Please Enter a valid city name.</div>
                :
                null
            }
        </div>
        );
    }
    
}

export default Home;
