import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Admin.css';

class Admin extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {

        return (
            <div id = 'AdminContainer'>
               Admin
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