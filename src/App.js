import React, { Component } from 'react';
import Routes from './Routes';
import Head from './Components/principal/Head'




class App extends Component {
    render() {
        return (
            <div>
                <Head/>
                <div >
                    <div className="App" >
                        <Routes/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
