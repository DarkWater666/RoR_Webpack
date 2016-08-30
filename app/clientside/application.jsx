import './application.sss'
import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import DOM from 'react-dom'

import Index from './components/Index'
import Page from './components/Page'

class Application extends Component {
  render() {
    return this.props.children;
  }
}

DOM.render((
  <Router history={ browserHistory }>
    <Route component={ Application }>
      <Route path='/' component={ Index }/>
      <Route path='page' component={ Page }/>
    </Route>
  </Router>
  ), document.getElementById('application')
);
