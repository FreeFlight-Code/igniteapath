import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css';

export default class Home extends Component {
    // constructor(props){
    //     super(props)
    // }


    iframeStyle = {
        width: '100%',
        height: '100%'

    }

    render() {

        return (
            <div className='HomeContainer'>
                <iframe title="mainVideo" style={this.iframeStyle} src="https://www.youtube.com/embed/XFPaiMO4gVQ?autoplay=1" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    < Header loggedin={this.props.loggedin} />
                < Footer />
            </div>
        )
    }
}