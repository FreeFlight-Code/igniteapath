import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import logo from '../../images/logo-for-website-1-e1536267500497.png';
import { testuser } from '../../ducks/user';

class Login extends Component {

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
              <input type='submit' onClick={e => { this.props.testuser()}}></input>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user
  }
}

const mapDispatchToProps = {
  testuser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);