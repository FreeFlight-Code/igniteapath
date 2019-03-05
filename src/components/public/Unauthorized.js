import React, { Component } from 'react';
import { connect } from 'react-redux';

class Unauthorized extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authPrivilege: 'user'
        }
    }


    render() {
        const { authPrivilege } = this.state;
        console.log(this.props)
        return (
            <div id = 'UnauthorizedContainer'>
               You are not authorized to view that page you only have <span>{`${authPrivilege}`} privileges.</span>
               <button onClick={_=>{this.props.history.push('/#/')}}>Back to Public Area</button>
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