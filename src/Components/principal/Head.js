import React from 'react';
import logo from '../../t3chfy_cmyk.png';
import '../../App.css'
class Head extends React.Component {
    render(){
        return (
            <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>T3chfest 2017</h2>
            </div>
            </div>
        );
    }
}

export default Head;