//Todo need to pull in 'logged in' data from store to stay updated on all headers

import React, { Component } from 'react';
import { connect } from 'react-redux';
import getPaths from '../../ducks/paths';

import Header from './Header';
import PathDetail from './PathDetail';

import './Paths.css';

class Paths extends Component {
    constructor(props) {
        super(props);
        this.state={
            paths:[],
            selectedpath: {},
            showDetailModal: false
        }
        this.toggleShowDetailModal = this.toggleShowDetailModal.bind(this);
    }

    componentWillMount() {
        // load test data
        if(this.props.paths.length){
            this.setState({paths: this.props.paths})
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
        const { paths } = this.state;
        const pathsList = paths.map((el, i)=>{
            return (
                <div
                    className='pathContainer'
                    key={`path-${i}`}
                    onClick={e=>{
                        e.preventDefault();
                        this.setState({selectedpath: el, showDetailModal: true})
                    }}
                >
                    <img
                        src={el.thumbnail}
                        alt={`path ${el.title} Thumbnail`}
                    ></img>
                    <div className='descriptionContainer'>
                        <h3>{el.title.toUpperCase()}</h3>
                        <p>{this.clipDescription(el.description)}</p>
                        <p>{`$${el.price}`}</p>
                    </div>
                </div>
            )
        })

        if (!this.state.showDetailModal) return (
            <div id = 'PathsContainer'>
                < Header />
                <h1>Masterclasses</h1>
                {pathsList}
            </div>
        );
        if(this.state.showDetailModal) return (
            < PathDetail path={this.state.selectedpath} closeModal={this.toggleShowDetailModal}/>
        )
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