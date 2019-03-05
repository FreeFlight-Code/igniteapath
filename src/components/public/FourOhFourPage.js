import React, { Component } from 'react';
import { connect } from 'react-redux';

class FourOhFour extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {

    const styling = {
        fontSize: "50px"
    }
        return (
            <div style={styling} id = 'FourOhFourContainer'>
               Sorry Can't find that page!!!! 404!!!
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

export default connect(mapStateToProps, mapDispatchToProps)(FourOhFour);