import React, { Component } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Admin from './Admin';
import Courses from '../public/Paths';
import CourseDetail from '../public/PathDetail';
import Blog from '../public/Blog';
import FourOhFour from '../public/FourOhFour';
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
          <Route component={ Courses } path='/secure/admin/courses' />
          <Route component={ CourseDetail } path='/secure/admin/course/:id' />
          <Route component={ Blog } path='/secure/admin/blog' />
          <Route component={ Admin } exact path='/secure/admin' />
          <Route component={ Account } exact path='/secure/account' />
          <Route component={ FourOhFour } path='/' />
        </Switch>
      </HashRouter>
    );
  }
}
