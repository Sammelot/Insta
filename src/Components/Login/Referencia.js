import React, {Component} from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import {Link, NavLink} from 'react-router-dom';
import  './Bac.css' ;



class Background extends Component{

          render() {
            return (

              <div>


             
                  <div className="carousel-h">


                    <h1> Comparte las mejores fotos de tu mascota</h1>
                        <h2> Sabemos que te gusta captar cada momento de ellos</h2>

                    <Carousel autoplay>
                        <div><img src="https://images.pexels.com/photos/374825/pexels-photo-374825.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt=""/></div>
                        <div><img src="https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt=""/></div>
                        <div> <img src="https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt=""/></div>
                        <div><img src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt=""/></div>
                        <div> <img src="https://images.pexels.com/photos/5143/cute-animals-easter-chicken.jpg?w=940&h=650&auto=compress&cs=tinysrgb" alt=""/></div>
                        <div> <img src="https://images.pexels.com/photos/39571/gorilla-silverback-animal-silvery-grey-39571.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt=""/></div>
                      </Carousel>


                  </div>

</div>



        );
    }
}

export default Background;
