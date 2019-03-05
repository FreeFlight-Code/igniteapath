import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftMenu from '../sub/leftMenu';

import './Account.css';

class Account extends Component {

    render() {

        return (
            <div id = 'AccountContainer'>
                Account View
                < LeftMenu menu={[
                    {title: 'Profile', link: '/#/secure/account'},
                    {title: 'Billing', link: '/#/secure/account/billing'},
                    {title: 'My Paths', link: '/#/secure/account'},
                    {title: 'Blog', link: '/#/blog'},
                ]}/>
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