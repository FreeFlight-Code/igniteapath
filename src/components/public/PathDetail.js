import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PathDetail.css';

class PathDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            path: {}
        }
    }

    componentWillMount() {
        if (this.props.path){
            this.setState({path: this.props.path})
        }
    }



    render() {
        console.log(this.state)
        return (
            <div id = 'PathDetailContainer' style={{ backgroundImage: `url(${this.state.path.thumbnail})` }}>
                <span className='closeModal' onClick={e=>{this.props.closeModal()}}>X</span>
                <h1>{this.state.path.title}</h1>
                <p>{this.state.path.description}</p>
            {/* <a href="\Users\COMP\Desktop\igniteapath\src\images\katie_couple.jpg" download>download</a> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(PathDetail);