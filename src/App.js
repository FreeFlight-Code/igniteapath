import React, { Component } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Paths from './components/public/Paths';
import Login from './components/public/Login';
import Secure from './components/secure/Secure';
import Home from './components/public/Home';
import Blog from './components/public/Blog';
import Unauthorized from './components/public/Unauthorized';
import FourOhFour from './components/public/FourOhFour';

import getUserInfo from './ducks/user';


class App extends Component {
    constructor (props) {
      super(props)
      this.state={
        loggedin: false
      }
    }
  render() {
    // this.props.getUserInfo();
    console.log(this.props)
    return (
      <HashRouter>
        <Switch>
          <Route render={props => <Paths {...props} loggedin={this.state.loggedin} />} path='/paths' />
          <Route render={props => <Login {...props} loggedin={this.state.loggedin} />} path='/login' />
          <Route render={props => <Blog {...props} loggedin={this.state.loggedin} />} path='/blog' />
          <Route render={props=><Home {...props} loggedin={this.state.loggedin}/>} path='/' exact />
          <Route function={< Unauthorized />} path='/unauthorized' />
          <Route render={props=>this.state.loggedin ? <Secure {...props} loggedin={this.state.loggedin}/> : <Unauthorized/>} path='/secure' />
          <Route component={ FourOhFour } path='/' />
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const {user, loading, paths} = state;
    return {
      user,
      loading,
      paths
    }
}

const mapDispatchToProps = {
  getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);