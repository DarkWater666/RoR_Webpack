import React from 'react'

export default class Test extends React.Component {
  render() {
    return(
        <div className="pizdets">Пиздишь, { this.props.name }!</div>
    );
  }
}
