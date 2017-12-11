import React, {Component} from 'react';

import firebase from 'firebase';
import {Button , TextField} from 'material-ui';
import '../../App.css';


class ChatRoom extends Component {

    constructor() {
        super();
        this.state = {
            user:null,
            message: '',
            messages: []
        }

    }

    componentWillMount() {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({user});
        });


    }

    componentDidMount() {
        firebase.database().ref('messages/').on('value', snapashot => {
            const currentMessages = snapashot.val();
            console.log("Sí se subió");
            if (currentMessages != null) {
                this.setState({
                    messages: currentMessages
                });
            }
        });
    }

    updateMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let list = this.state.messages;
        const newMessage = {
            id: this.state.messages.length,
            text: this.state.message
        };

        firebase.database().ref(`messages/${newMessage.id}`)
            .set(newMessage);
        this.setState({
            message: ''
        });
    }



    render() {


        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.state.messages.map(mensage=>(
                    <div className="App-card">
                        <figure className="App-card-image">
                            <li key={mensage.id}>{mensage.text}</li>
                            <figCaption className="App-card-footer">
                                <img className="App-card-avatar" src={mensage.photoURL}
                                     alt={mensage.displayName}/>
                                <span className="App-card-name">{mensage.displayName}</span>
                            </figCaption>
                        </figure>
                    </div>
                ))
                }
                <TextField
                    onChange={this.updateMessage.bind(this)}
                    value={this.state.message}
                    placeholder="Mensaje"
                    type="text"/>
                <Button
                    onClick={this.handleSubmit.bind(this)}
                    raised color="primary">
                    Enviar
                </Button>
            </form>
        )
    }
}

export default ChatRoom;
