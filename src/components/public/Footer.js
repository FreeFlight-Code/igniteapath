import React, { Component } from 'react';
import Menu from '../sub/menu'
import './Footer.css';

export default class Footer extends Component {

    render() {
        return (
            <div className='FooterContainer'>
                < Menu
                    menu={[
                        {title:"about", link:"/#/"},
                        {title:'blog', link:'/#/'},
                        {title:'booking', link:'/#/'},
                        {title:'contact', link:'/#/'},
                        {title:'front page', link:'/#/'},
                        {title:'home', link:'/#/'},
                        {title:'ignite a path to meditation', link:'/#/'},
                        {title:'masterclass', link:'/#/'},
                        {title:'masterclasses', link:'/#/'},
                        {title:'masterclasses', link:'/#/'},
                        {title:'membership account', link:'/#/'},
                        {title:'my paths', link:'/#/'},
                        {title:'podcasts', link:'/#/'},
                        {title:'thank you for booking', link:'/#/'},
                        {title:'contact', link:'/#/'},
                        {title:'account', link:'/#/'}
                    ]}
                />
            </div>
        )
    }
}