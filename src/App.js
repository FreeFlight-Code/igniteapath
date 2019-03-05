import React, { Component } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Paths from './components/public/PathsPage';
import PathDetail from './components/public/PathDetailPage';
import Login from './components/public/LoginPage';
import Secure from './components/secure/Secure';
import Home from './components/public/HomePage';
import Blog from './components/public/BlogPage';
import Unauthorized from './components/public/UnauthorizedPage';
import FourOhFour from './components/public/FourOhFourPage';

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
          <Route component={PathDetail} path="/paths/:id" />
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
  const {user, loading} = state;
    return {
      user,
      loading
    }
}

const mapDispatchToProps = {
  getUserInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);