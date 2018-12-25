import React, { Component } from 'react';
import { connect } from 'react-redux';

import './leftMenu.css';

class leftMenu extends Component {
    // constructor(props) {
    //     super(props);
    // }



    render() {
        const menu = this.props.menu || [
            {title: 'Profile', link: '/#/secure/account'},
            {title: 'Billing', link: '/#/secure/account/billing'},
            {title: 'My Paths', link: '/#/secure/account'},
            {title: 'Extra', link: '/#/Extra'},
            {title: 'Blog', link: '/#/Blog'},
        ]
        const renderMenu = _=>{
            return menu.map((el, i)=>{
                return <div key={`leftmenu-div-${i}`}onClick={e=>{window.location = el.link}}>{el.title}</div>
            })
        }
        return (
            <aside id = 'leftMenuContainer'>
                <span>Menu</span>
                {renderMenu()}
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(leftMenu);