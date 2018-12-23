import React, { Component } from 'react';
import Menu from '../sub/menu';
import './Header.css';
import logo from '../../images/logo-for-website-1-e1536267500497.png';
import upArrowIcon from '../../images/Arrow_Top.png';


export default class Header extends Component {
    // constructor(props){
    //     super(props)
    // }


    login (){
        return (
            this.props.loggedin ? {title:"LOG OUT", link:"/#/"} : {title:"MY COURSES", link:"/#/login"}
        )
    }

    render() {
        return (
            <div className='HeaderFrame'>
                <span><img src={upArrowIcon}></img></span>
                <div className='HeaderContainer'>
                    <img alt='logo'src={logo}></img>
                    < Menu
                    menuArray={[
                        {title:"SITE MAP",
                            link: [
                                {title:"home", link:"/#/"},
                                {title:"login", link:"/#/login"},
                                {title:"all courses", link:"/#/courses"},
                                {title: 'blog', link: '/#/blog'}
                            ]
                        },
                        {title:"ALL COURSES", link:"/#/courses"},
                        this.login()
                    ]}/>
                </div>
            </div>
        )
    }
}