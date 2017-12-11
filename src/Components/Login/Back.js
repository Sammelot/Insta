import React, {Component} from 'react';
import elvideo  from './video.mp4';
import Referencia from './Referencia';
import {Link, NavLink} from 'react-router-dom';
import  './Bac.css' ;



class Background extends Component{

          render() {
            return (
                  <div>
                  <div  className = "video">

                <video autoPlay loop muted  style={{ width: "100%", height: "100%" }}>
                  <source src={elvideo} type="video/mp4"/>
                </video>

                <div className= "vi">

                <img src={require ('./logo.png')} className="logodos" />
                  <h1> Bienvenidos </h1>



  <div className="nav-back"> <NavLink to="/descu">   Descubre   </NavLink> </div>



              </div>




                  </div>
                  <hr/>
                  <hr/>


<Referencia/>
                  </div>

        );
    }
}

export default Background;
