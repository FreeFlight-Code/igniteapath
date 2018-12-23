import React, { Component } from 'react';
import { connect } from 'react-redux';

import './leftMenu.css';

class leftMenu extends Component {
    // constructor(props) {
    //     super(props);
    // }



    render() {
        console.log(this.state)
        return (
            <aside id = 'leftMenuContainer'>
                <span>Menu</span>
                <div>Profile</div>
                <div>Billing</div>
                <div>My Paths</div>
                <div>Extra</div>
                <div>Comments</div>
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