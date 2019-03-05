import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, HashRouter, Route } from 'react-router-dom';
import Admin from './Admin';
import Paths from '../public/PathsPage';
import PathDetail from '../public/PathDetailPage';
import Blog from '../public/BlogPage';
import FourOhFour from '../public/FourOhFourPage';
import Account from './Account';

class Secure extends Component {


  componentWillMount(){
    const auth = this.props.user.priv;
    if (auth === 'admin') window.location = '/#/secure/admin';
    else if (auth === 'user') window.location = '/#/secure/account';
    else window.location = '/#/unauthorized'
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={ Paths } path={`/secure/admin/paths`} />
          <Route component={ PathDetail } path={`/secure/admin/path/:id`} />
          <Route component={ Blog } path={`/secure/admin/blog`} />
          <Route component={ Admin } exact path={`/secure/admin`} />
          <Route component={ Account } exact path={`/secure/account`} />
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

}

export default connect(mapStateToProps, mapDispatchToProps)(Secure);