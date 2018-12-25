//Todo need to pull in 'logged in' data from store to stay updated on all headers

import React, { Component } from 'react';
import { connect } from 'react-redux';
import getCourses from '../../ducks/courses';
import data from '../../config/courses_test.json';

import Header from './Header';
import CourseDetail from './CourseDetail';

import './Courses.css';

class Courses extends Component {
    constructor(props) {
        super(props);
        this.state={
            courses:[],
            selectedCourse: {},
            showDetailModal: false
        }
        this.toggleShowDetailModal = this.toggleShowDetailModal.bind(this);
    }

    componentWillMount() {
        // load test data
        if(!this.props.courses.length){
            this.setState({courses: data})
        }
    }
    clipDescription (description){
        if (description.length>320){return description.slice(0, 320) + '...'}
        return description;
    }

    toggleShowDetailModal(){
        const value = !this.state.showDetailModal
        this.setState({
            showDetailModal: value
        })
    }


    render() {
        const { courses } = this.state;
        const coursesList = courses.map((el, i)=>{
            return (
                <div
                    className='courseContainer'
                    key={`course-${i}`}
                    onClick={e=>{
                        e.preventDefault();
                        this.setState({selectedCourse: el, showDetailModal: true})
                    }}
                >
                    <img
                        src={el.thumbnail}
                        alt={`Course ${el.title} Thumnail`}
                    ></img>
                    <div className='descriptionContainer'>
                        <h3>{el.title.toUpperCase()}</h3>
                        <p>{this.clipDescription(el.description)}</p>
                    </div>
                </div>
            )
        })

        if (!this.state.showDetailModal) return (
            <div id = 'CoursesContainer'>
                < Header />
                <h1>Ignite YOUR Path Courses</h1>
                {coursesList}
            </div>
        );
        if(this.state.showDetailModal) return (
            < CourseDetail course={this.state.selectedCourse} closeModal={this.toggleShowDetailModal}/>
        )
    }
}

const mapStateToProps = (state) => {
    const {courses} = state;
    return {
        courses
    }
}

const mapDispatchToProps = {
    getCourses
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);