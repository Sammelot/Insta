import React, {Component} from 'react';
import toastr from 'toastr';
import firebase from 'firebase';
import {AppBar, Toolbar, Typography} from 'material-ui';
import ChatRoom from './ChatRoom';

class CharRoomPage extends Component {
    constructor(props){
        super(props);
        this.state={user:''};
        firebase.auth()
            .onAuthStateChanged(user=> {
                if(user){
                    this.setState({
                        user:user
                    });
                }else{
                    toastr.error("Debe Iniciar sesión")
                    this.props.history.push('login');
                }
            });
    }
    render() {
        return (
            <div className="App">
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            CoonChat! :D
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ChatRoom/>
            </div>
        )
    }
}

export default CharRoomPage;