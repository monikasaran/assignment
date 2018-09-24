import React from 'react';
import './Header.css';

class Header extends React.Component{
    headerText = "Weather Report"
    render(){
        return <header className="App-header">
          <h1 className="App-title">{this.headerText}</h1>
        </header>

    }
}

export default Header