import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftMenu from '../sub/leftMenu';

import './Admin.css';

class Admin extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {

        return (
            <div id = 'AdminContainer'>
               Admin
               < LeftMenu menu={[
                   {title: 'Home', link: '/'},
                   {title: 'Admin Home', link: '/#/secure/admin'},
                   {title: 'Courses', link: '/#/secure/admin/courses'},
                   {title: 'Blog', link: '/#/secure/admin/blog'}
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);