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
        const height = window.innerHeight - 90;
        const width = "98%";
        return (
            <div className='HomeContainer'>
                <iframe title="mainVideo" width={width} height={height} src="https://www.youtube.com/embed/XFPaiMO4gVQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    < Header loggedin={this.props.loggedin} />
                < Footer />
            </div>
        )
    }
}