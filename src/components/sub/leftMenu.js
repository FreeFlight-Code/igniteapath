import React from 'react';

import './leftMenu.css';

export default function (props) {

// if no menu on props render something
        const menu = props.menu || [
            {title: 'Test', link: '/#/'},
            {title: 'Data', link: '/#/'},
            {title: 'Only', link: '/#/'}
        ]
// map through menu
        const renderMenu = _=>{
            return menu.map((el, i)=>{
                return <div key={`leftmenu-div-${i}`}onClick={e=>{window.location = el.link}}>{el.title}</div>
            })
        }
// render
        return (
            <aside id = 'leftMenuContainer'>
                <span>Menu</span>
                {renderMenu()}
            </aside>
        );

}
