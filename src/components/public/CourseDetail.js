import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CourseDetail.css';

class CourseDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            course: {}
        }
    }

    componentWillMount() {
        if (this.props.course){
            this.setState({course: this.props.course})
        }
    }



    render() {
        console.log(this.state)
        return (
            <div id = 'CourseDetailContainer' style={{ backgroundImage: `url(${this.state.course.thumbnail})` }}>
                <span className='closeModal' onClick={e=>{console.log('hello');this.props.closeModal()}}>X</span>
                <h1>{this.state.course.title}</h1>
                <p>{this.state.course.description}</p>
                <a href="../../images/burger.jpg" download="burgertime">download</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);