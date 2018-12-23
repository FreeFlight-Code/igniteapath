import React, { Component } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Courses from './components/public/Courses';
import Login from './components/public/Login';
import Secure from './components/secure/Secure';
import Home from './components/public/Home';
import Unauthorized from './components/public/Unauthorized';
import FourOhFour from './components/public/FourOhFour';


class App extends Component {
    constructor (props) {
      super(props)
      this.state={
        loggedin: true
      }
    }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={ this.state.loggedin ? Secure : Unauthorized } path='/secure' />
          <Route component={ Courses } path='/courses' />
          <Route component={ Login } path='/login' />
          <Route render={props=><Home {...props} loggedin={this.state.loggedin}/>} path='/' exact />
          <Route component={ Unauthorized } path='/unauthorized' />
          <Route component={ FourOhFour } path='/' />
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App);