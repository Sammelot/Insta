import React, { Component } from 'react';
import firebase from 'firebase';

import {SocialIcon} from 'react-social-icons';
import toastr from 'toastr';
import FileUpload from '../../FileUpload';
import {NavLink} from 'react-router-dom';
import '../../App.css';



class HomePage extends Component {
    constructor () {
        super();
        this.state = {
            user: null,
            pictures: [],
            usuario:{
                email: '',
                password: ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.userPassLogin = this.userPassLogin.bind(this);
        this.twitterLogin = this.twitterLogin.bind(this);
        this.socialLogin = this.socialLogin.bind(this);
        this.handleAuth = this.handleAuth.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    componentWillMount () {
        // Cada vez que el método 'onAuthStateChanged' se dispara, recibe un objeto (user)
        // Lo que hacemos es actualizar el estado con el contenido de ese objeto.
        // Si el usuario se ha autenticado, el objeto tiene información.
        // Si no, el usuario es 'null'
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });

        firebase.database().ref('pictures').on('child_added', snapshot => {
            this.setState({
                pictures: this.state.pictures.concat(snapshot.val())
            });
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {usuario} = this.state;
        const {userPassLogin} = this.props;
        userPassLogin(usuario.email, usuario.password);
    }

    handleChange = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        let usuario = this.state.usuario;
        usuario[nombre] = valor;
        this.setState({usuario});
    }

    socialLogin  ()  {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result)=>{
                console.log(result.user);

            });

    }

    twitterLogin = () =>{
        var provider = new firebase.auth.TwitterAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {

            toastr.success("Bienvenido");


        }).catch(function(error) {
        });
    }

    userPassLogin = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((result) =>{
                toastr.success("Bienvenido");

            }
        ).catch((error) => {

        });
    }

    handleAuth () {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(function(result){console.log(`${result.user.email} ha iniciado sesión`)})
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleLogout () {
        firebase.auth().signOut()
            .then(result => console.log(`${result.user.email} ha cerrado sesión`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleUpload (event) {
        const file = event.target.files[0];
        const storageRef = firebase.storage().ref(`fotos/${file.name}`);
        const task = storageRef.put(file);

        // Listener que se ocupa del estado de la carga del fichero
        task.on('state_changed', snapshot => {
            // Calculamos el porcentaje de tamaño transferido y actualizamos
            // el estado del componente con el valor
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            })
        }, error => {
            // Ocurre un error
            console.error(error.message);
        }, () => {
            // Subida completada
            // Obtenemos la URL del fichero almacenado en Firebase storage
            // Obtenemos la referencia a nuestra base de datos 'pictures'
            // Creamos un nuevo registro en ella
            // Guardamos la URL del enlace en la DB
            const record = {
                photoURL: this.state.user.photoURL,
                displayName: this.state.user.displayName,
                image: task.snapshot.downloadURL
            }
            const dbRef = firebase.database().ref('pictures');
            const newPicture = dbRef.push();
            newPicture.set(record);
        });
    }

    renderLoginButton () {
        if (!this.state.user) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <div style={{textAlign:"center", color:'white'}}>
                            <h3 style={{color:'black'}}>Inicia con:</h3>
                            <SocialIcon className= "icon" network="google" onClick={this.handleAuth} />

                            <SocialIcon className= "icon" network="facebook" onClick={this.socialLogin} />

                            <SocialIcon className="icon" network="twitter" onClick={this.twitterLogin}/>
                            <h3 style={{color:'black'}}>o</h3>

                        </div>
                        <label htmlFor="email">Correo</label>
                        <input className="emailLogin" value={this.state.usuario.correo} type="email" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>

                        <label htmlFor="pass">Contraseña</label>
                        <input value={this.state.usuario.password} type="password" id="pass " name="password" placeholder="Contraseña" onChange={this.handleChange}/>


                        <input type="submit" value="Iniciar sesión" className="aceptar"/>
                        <p>
                            <NavLink style={{color:"white",textDecoration: 'underline'}} to="/signup">
                                <p>
                                    Registrarse
                                </p>
                            </NavLink>
                        </p>
                    </form>
                </div>

            );
        } else  {
            return (
                <div className="App-intro">
                    <p className="App-intro">¡Hola, { this.state.user.displayName }!</p>

                    <button onClick={this.handleLogout} className="App-btn">
                        Salir
                    </button>

                    <FileUpload onUpload={ this.handleUpload }/>

                    {
                        this.state.pictures.map(picture => (
                            <div className="App-card">
                                <figure className="App-card-image">
                                    <img width="320" src={picture.image} />
                                    <figCaption className="App-card-footer">
                                        <img className="App-card-avatar" src={picture.photoURL} alt={picture.displayName} />
                                        <span className="App-card-name">{picture.displayName}</span>
                                    </figCaption>
                                </figure>
                            </div>
                        )).reverse()
                    }

                </div>

            );
        }
    }

    render() {
        const center = {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            width:"100%",
            height:"80vh",
        };
        return (
            <div className="App">
                <div style={center}>
                    { this.renderLoginButton() }
                </div>
            </div>
        );
    }
}

export default HomePage;