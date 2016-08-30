import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Page extends Component {
  render() {
    return(
      <div>
        <h1>Hello, Again!</h1>
        <p>I'm a React Page!</p>
        <p>I also came to kill you!</p>
        <Link to='/'>На главную</Link>
      </div>
    );
  }
}
