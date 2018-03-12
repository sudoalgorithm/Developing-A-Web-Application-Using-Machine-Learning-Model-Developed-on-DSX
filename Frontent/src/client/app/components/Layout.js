import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

import Home from '../pages/Home';
import Results from '../pages/Results';

import store from '../store';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={function(props) {
            return(
              <Home {...this.props} {...props} />
            )
          }.bind(this)}/>
          <Route path="/results" render={function(props) {
            return(
              <Results {...this.props} {...props} />
            )
          }.bind(this)}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}