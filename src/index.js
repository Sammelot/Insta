import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
    apiKey: "AIzaSyC8_9D5OT3NooOH-f11jRM-UtDXvqUwGD8",
    authDomain: "coonstagram-4f6c6.firebaseapp.com",
    databaseURL: "https://coonstagram-4f6c6.firebaseio.com",
    projectId: "coonstagram-4f6c6",
    storageBucket: "coonstagram-4f6c6.appspot.com",
    messagingSenderId: "275501346021"

});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
