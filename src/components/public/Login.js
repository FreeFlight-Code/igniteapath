import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {

    render() {
        return (
                <div className='loginContainer'>
                    <a href='/#/secure/account'>
                        <button>Login</button>
                    </a>
                </div>
        )
    }
}