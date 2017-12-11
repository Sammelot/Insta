import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './Components/Login/Login.js';
import Descubre from './Components/Login/Referencia.js';
import HomePage from './Components/Login/Back.js';
import SignUpPage from './Components/signup/SignUpPage';
import CoonChat from './Components/Chat/CharRoomPage';


const Routes = () => (
    <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/descu" component={Descubre}/>
        <Route exact path="/" component={HomePage}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path="/coonchat" component={CoonChat}/>

    </Switch>
);

export default Routes;
