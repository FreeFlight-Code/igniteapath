import React, { Component } from 'react';
import { connect } from 'react-redux';

class Unauthorized extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authPrivilege: 'unspecified'
        }
    }


    render() {
      const { authPrivilege } = this.state;
      setTimeout(
        function (){
          window.location.assign('/#/')
        }
      , 4000);
      return (
        <div id='UnauthorizedContainer'>
          You are not authorized to view that page you only have <span>{`${authPrivilege}`} privileges.</span>
          You will be redirected to the home page in 3 seconds.
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