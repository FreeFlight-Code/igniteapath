import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PathDetailPage.css';

class PathDetail extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         path: {}
    //     }
    // }

    componentWillMount() {
        if (!this.props.match.params.id || !this.props.paths.length){
          window.location.assign('/#/paths');
          alert('could not find that path')
        }
        if (this.props.match.params.id){

        }
    }



    render() {
      const path = this.props.paths.filter((el)=>{
        return el.id === this.props.match.params.id
      })[0];
        return (
            <div id = 'PathDetailContainer' style={{ backgroundImage: `url(${path.thumbnail})` }}>
                <span className='close' onClick={_=>{window.location.assign('/#/paths')}}>X</span>
                <h1>{path.title}</h1>
                <p>{path.description}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  const { paths } = state.paths;
    return {
      paths
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PathDetail);