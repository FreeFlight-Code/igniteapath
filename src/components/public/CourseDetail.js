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
            <div id = 'CourseDetailContainer'>
               <h1>{this.state.course.title}</h1>
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