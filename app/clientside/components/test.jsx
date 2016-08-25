import React, { Component } from 'react'

import styles from './test.sss'

export default class Test extends Component {
  render() {
    return(
        <div className={ styles.pizdets }>
          <div className={ styles.picture }></div>
          <p className={ styles.paragraph }>Пиздишь, { this.props.name }!</p>
          <span className={ [styles.pizdets__item, styles.pizdets__item_modify].join(' ') }>Бугога!</span>
        </div>
    );
  }
}
