import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../sub/menu';
import './Header.css';

import logo from '../../images/logo-for-website-1-e1536267500497.png';

class Header extends Component {

  render() {
    const { isLoggedIn } = this.props.user;
      return (
          <div className='HeaderContainer'>
            <img className='logo' alt='igniteapath logo' src={logo}></img>
            < Menu
                menu={[
                    {title:"about", link:"/#/about"},
                    {title:'new? start here', link:'/#/'},
                    {isLoggedIn} ? {title:"my paths", link:"/#/secure/account/paths"} : {title:"masterclasses", link:"/#/paths"},
                    {title:'blog', link:'/#/blog'},
                    { title: 'contact', link: '/#/contact'},
                    {isLoggedIn} ? { title: "my account", link: "/#/secure/account" } : { title: "login", link: "/#/login" }
                ]}
            />
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);