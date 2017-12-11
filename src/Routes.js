import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './Components/HomePage/HomePage.js';
import SignUpPage from './Components/signup/SignUpPage';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/signup" component={SignUpPage}/>

    </Switch>
    );

export default Routes;