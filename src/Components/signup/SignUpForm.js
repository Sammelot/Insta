import React, {Component} from 'react';
import './SignUp.css';
import toastr from 'toastr';

class SignUpForm extends Component{
    state = {
        usuario: {
            nombres: '',
            apellidos: '',
            email: '',

            password: ''
        },
        match: true,
        passwordMatch: ''
    }
    handleChange = (e) => {
        var nombre = e.target.name;
        var valor = e.target.value;
        let usuario = this.state.usuario;
        usuario[nombre] = valor;
        this.setState({usuario});
    }

    handleChangeMatch = (e) => {
        const nombre = e.target.name;
        const valor = e.target.value;
        this.setState({passwordMatch:valor});
        if( valor === this.state.usuario.password ){
            this.setState({match:true});
        }else{
            this.setState({match:false});
        }
    }

    showUserPass = (event) => {
        event.preventDefault();
        toastr.success(this.state.usuario.email);
        if( this.state.passwordMatch === this.state.usuario.password ){
            const {signInUserPass} = this.props;
            const {usuario} = this.state;
            signInUserPass(usuario.email, usuario.password);
        }else{
            toastr.error('Las contraseñas no coinciden');
        }

    }

    render(){
        const {usuario} = this.state;
        var color = this.state.match ? 'green' : 'red';
        var msg = this.state.match ? '' : 'Las contraseñas no coinciden';
        return(
            <div className="center">
                <form onSubmit={this.showUserPass} className="login-form">

                  <label htmlFor="name">Nombre</label>
                  <input required="required" className="textPersonalizado" type="text" id="name " name="names" placeholder="Nombre" onChange={this.handleChange}/>

                  <label htmlFor="apellido">Apellidos</label>
                  <input required="required" className="textPersonalizado" type="text" id="apelli " name="apellido" placeholder="Apellidos" onChange={this.handleChange}/>



                    <label htmlFor="email">Correo</label>
                    <input required="required" value={usuario.correo} className="emailLogin" type="email" id="email" name="email" placeholder="Correo electrónico" onChange={this.handleChange}/>

                    <label htmlFor="password">Contraseña</label>
                    <input required="required" value={usuario.password} type="password" id="password" name="password" placeholder="Contraseña" onChange={this.handleChange}/>

                    <label htmlFor="passwordMatch">Contraseña</label>
                    <input required="required" value={this.state.passwordMatch} type="password" id="passwordMatch" name="passwordMatch" placeholder="Confirmar contraseña" onChange={this.handleChangeMatch}/>

                    <label style={{color:color}}>{msg}</label>

                    <input type="submit" value="Registarse" className="aceptar"/>

                </form>
            </div>
        );
    }
}

export default SignUpForm;
