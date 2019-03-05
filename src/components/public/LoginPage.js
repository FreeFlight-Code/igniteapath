import React, { Component } from 'react';
import './LoginPage.css';
import logo from '../../images/logo-for-website-1-e1536267500497.png';
export default class Login extends Component {

    handleSubmit(){
        //submit form
        window.location='/#/secure';
    }

    render() {
        return (
                <div className='loginContainer'>
                    <div className='smallLoginModal'>
                        <div className='logoContainer'>
                            <img alt='igniteapath logo' src={logo}></img>
                        </div>
                        <input type='text' placeholder='Name'></input>
                        <input type='text' placeholder='Password'></input>
                        <input type='submit' onClick={e=>{this.handleSubmit()}}></input>
                    </div>
                </div>
        )
    }
}