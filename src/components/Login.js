import React, { Component } from 'react';
import '../styles/main.scss'

export default class Login extends Component {
    render() {
        return(
            <div>
                <a href={process.env.REACT_APP_LOGIN }><button>Login/Register</button></a>
                <a href= 'http://localhost:3000/#/home'><button>Shop Now</button></a>
            </div>
        )
    }
}