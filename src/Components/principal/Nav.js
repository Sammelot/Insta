import React from 'react';
import './princi.css';
import 'antd/dist/antd.css';

import Routes from '../../Routes';
import {Link, NavLink} from 'react-router-dom';

import {Menu} from 'antd';
import firebase from '../../firebase';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <NavLink to="/"> <img src={require('./logo.png')}
                                          className="logo"/> </NavLink>

                </div>
                <Menu


                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['4']}
                    style={{lineHeight: '70px'}}
                >

                    <Menu.Item key="4"> <NavLink to="/login"> Entrar </NavLink> </Menu.Item>

                    <Menu.Item key="2"> <NavLink to="/signup"> Registrate </NavLink> </Menu.Item>

                    <Menu.Item key="3"> <NavLink to="/coonchat"> CoonChat </NavLink> </Menu.Item>



                </Menu>


            </div>

        );
    }
}

export default Nav;
