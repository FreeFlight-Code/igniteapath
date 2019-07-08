//Todo need to pull in 'logged in' data from store to stay updated on all headers

import React, { Component } from 'react';
import { connect } from 'react-redux';
import getPaths from '../../ducks/paths';
import Header from './Header';
import './PathsPage.css';

class Paths extends Component {

    componentWillMount() {
        // load test data
        if(this.props.paths.length){
            this.setState({paths: this.props.paths})
        }
        //TODO if no data do something
    }

    componentDidMount() {
      // TODO call get paths
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //    return true;
    // }

    clipDescription (description){
        if (description.length>320){return description.slice(0, 320) + '...'}
        return description;
    }

    render() {
        const { paths } = this.props;
        const pathsList = paths.map((el, i)=>{
            return (
                <div
                    className='pathCard'
                    key={`path-${i}`}
                    onClick={e=>{
                        e.preventDefault();
                        window.location.assign('/#/paths/' + el.id)
                    }}
                >
                    <img
                      className='image'
                      src={el.thumbnail}
                      alt={`path ${el.title} Thumbnail`}
                    ></img>
                    <div className='title'>{el.title.toUpperCase()}</div>
                    <div className='price'>{`$${el.price}`}</div>
                    <div className='description'>{this.clipDescription(el.description)}</div>
                </div>
            )
        })

        return (
            <div id = 'PathsContainer'>
                < Header />
                <h1>Masterclasses</h1>
                {pathsList}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {paths} = state.paths;
    return {
        paths
    }
}

const mapDispatchToProps = {
    getPaths
}

export default connect(mapStateToProps, mapDispatchToProps)(Paths);