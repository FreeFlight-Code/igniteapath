import React, { Component } from 'react';
import { connect } from 'react-redux';

// import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    componentWillMount() {
        if (this.props.path){

        }
    }



    render() {
        return (
            <div id = 'BlogContainer'>
                Blog Page
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);