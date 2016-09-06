import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './Index.sss'

import Test from '../../widgets/test/Test'

export default class Index extends Component {
  render() {
    return(
      <div className={ styles.root }>
        <h1>Hello, MotherFucker!</h1>
        <p>I'm a React Component!</p>
        <p>I came to kill you!</p>
        <Test name="сцуко"/>
        <Link to='/page'>На страницу</Link>
      </div>
    );
  }
}
