import React, { Component } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Admin from './Admin';
import Account from './Account';
import Unauthorized from '../public/Unauthorized';
import FourOhFour from '../public/FourOhFour';

export default class Secure extends Component {

  isLoggedIn(){
    const currentLocation = window.location;
    //check store to see if logged in
    //if admin route to /secure/admin
    //if user route to /secure/accout
    //else route to /#/unauthorized
    window.location=currentLocation;
  }

  render() {
    this.isLoggedIn();
    return (
      <HashRouter>
        <Switch>
          <Route component={ Admin } path='/secure/admin' />
          <Route component={ Account } path='/secure/account' />
          <Route component={ Unauthorized } path='/unauthorized' />
          <Route component={ FourOhFour } path='/' />
        </Switch>
      </HashRouter>
    );
  }
}
