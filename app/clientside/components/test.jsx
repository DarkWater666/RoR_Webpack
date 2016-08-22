import React, { Component } from 'react'

import styles from './test.sss'

export default class Test extends Component {
  render() {
    return(
        <div className={ styles.pizdets }>Пиздишь, { this.props.name }!</div>
    );
  }
}
