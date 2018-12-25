import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftMenu from '../sub/leftMenu';

import './Account.css';

class Account extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {

        return (
            <div id = 'AccountContainer'>
                Account View
                < LeftMenu />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Account);