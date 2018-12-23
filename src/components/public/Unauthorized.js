import React, { Component } from 'react';
import { connect } from 'react-redux';

class Unauthorized extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {

        return (
            <div id = 'UnauthorizedContainer'>
               Unauthorized View
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

export default connect(mapStateToProps, mapDispatchToProps)(Unauthorized);