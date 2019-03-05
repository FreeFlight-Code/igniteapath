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

import { test } from './ducks/user';


class App extends Component {

    componentDidMount(){
      this.props.test();
    }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={PathDetail} path="/paths/:id" />
          <Route render={props => <Paths {...props} priv={this.props.user.priv} />} path='/paths' />
          <Route render={props => <Login {...props} priv={this.props.user.priv} />} path='/login' />
          <Route render={props => <Blog {...props} priv={this.props.user.priv} />} path='/blog' />
          <Route render={props=><Home {...props} priv={this.props.user.priv}/>} path='/' exact />
          <Route function={< Unauthorized />} path='/unauthorized' />
          <Route render={props=>this.props.user.priv ? <Secure {...props} priv={this.props.user.priv}/> : <Unauthorized/>} path='/secure' />
          <Route component={ FourOhFour } path='/' />
        </Switch>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
    return {
      user
    }
}

const mapDispatchToProps = {
  test
}

export default connect(mapStateToProps, mapDispatchToProps)(App);