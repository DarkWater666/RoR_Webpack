import './application.sss'
import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { render } from 'react-dom'

import Index from './components/Index'
import Page from './components/Page'

class Application extends Component {
  render() {
    return this.props.children;
  }
}

let appRouter = () => {
  return (
    <Router history={ browserHistory }>
      <Route component={ Application }>
        <Route path='/' component={ Index }/>
        <Route path='page' component={ Page }/>
      </Route>
    </Router>
  );
};

window.onload = () => {
  let reactNode = document.getElementById('application');
  if (reactNode) { render(appRouter(), reactNode); }
};
