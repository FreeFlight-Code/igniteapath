import React from 'react';
import './menu.css';

/*
*  Required array with obj containing title and link keys for every menu item
*
*
*
*
*/

export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuArray: [
                {title:"test-home",
                    link: [
                        {title:"test-secure werf wqef qwefwqe wqerr wqe ", link:"/#/secure"},
                        {title:"google", link:"http://google.com"},
                        {title:"test4-root", link:"/#/"}
                    ]
                },
                {title:"test-secure", link:"/#/secure"},
                {title:"google", link:"http://google.com"},
                {title:"test4-root", link:"/"}
            ]
         };
    }


    componentWillMount() {
        let {
            menuArray
        } = this.props;
        if(menuArray)this.setState({menuArray});
    }

    navigateClick(e, liElement, index){
        e.preventDefault();
        if(liElement && typeof liElement.link === 'string'){
            window.location = liElement.link;
        }
    }

     subMenu(liElement, index){
        if(liElement && typeof liElement.link !== 'string'){
            const liRender = liElement.link.map((el, i)=>{
                return(
                    <li key={`li-${el.title}-${i}`} onClick={e=>{this.navigateClick(e, el, i)}}>{el.title}</li>
                )
            })
            return(
                <ul className='subMenu'>
                    {liRender}
                </ul>
            )
        } else return null;
    }

    renderMenu(){
        const {menuArray} = this.state;
        return (menuArray.map((liElement, index)=>{
            return (
                    <li onClick={e=>{this.navigateClick(e, liElement, index)}} key={`menu-li-${index}`}>{liElement.title}
                        {this.subMenu(liElement, index)}
                    </li>
            )
        }))
    }

    render() {
        const renderMenu = this.renderMenu();
        return (
            <ul className='nav'>
                {renderMenu}
            </ul>
        );
    }
}
