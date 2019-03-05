import React, { Component } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Admin from './Admin';
import Paths from '../public/PathsPage';
import PathDetail from '../public/PathDetailPage';
import Blog from '../public/BlogPage';
import FourOhFour from '../public/FourOhFourPage';
import Account from './Account';

export default class Secure extends Component {

  isLoggedIn(){
    let admin, user;
    admin = true;
    user = true;
    console.log(admin)
    if (admin) window.location = '/#/secure/admin';
    else if (user) window.location = '/#/secure/account';
    else window.location = '/#/unauthorized'
  }

  render() {
    // this.isLoggedIn();
    return (
      <HashRouter>
        <Switch>
          <Route component={ Paths } path={`/secure/admin/paths`} />
          <Route component={ PathDetail } path={`/secure/admin/path/:id`} />
          <Route component={ Blog } path={`/secure/admin/blog`} />
          <Route component={ Admin } exact path={`/secure/admin`} />
          <Route component={ Account } exact path={`/secure/user`} />
          <Route component={ FourOhFour } path='/' />
        </Switch>
      </HashRouter>
    );
  }
}
