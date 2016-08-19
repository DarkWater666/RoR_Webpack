import React from 'react'
import ReactDOM from 'react-dom'
import Test from './components/test'

class Application extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello, MotherFucker!</h1>
        <p>I'm a React Component!</p>
        <p>I came to kill you!</p>
        <Test name="сцуко"/>
      </div>
    );
  }
}

let test = document.getElementById('react');

ReactDOM.render(<Application />, test);
