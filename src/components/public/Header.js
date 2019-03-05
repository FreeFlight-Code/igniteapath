import React, { Component } from 'react';
import Menu from '../sub/menu';
import './Header.css';
import logo from '../../images/logo-for-website-1-e1536267500497.png';

export default class Header extends Component {

    render() {
        return (
            <div className='HeaderContainer'>
              <img className='logo' alt='igniteapath logo' src={logo}></img>
              < Menu
                  menu={[
                      {title:"about", link:"/#/about"},
                      {title:'new? start here', link:'/#/'},
                      this.props.loggedin ? {title:"my paths", link:"/#/secure/account/paths"} : {title:"masterclasses", link:"/#/paths"},
                      {title:'blog', link:'/#/blog'},
                      { title: 'contact', link: '/#/contact'},
                      this.props.loggedin ? { title: "my account", link: "/#/secure/account" } : { title: "login", link: "/#/login" }
                  ]}
              />
            </div>
        )
    }
}