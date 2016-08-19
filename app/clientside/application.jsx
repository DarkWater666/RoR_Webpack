import React from 'react'
import ReactDOM from 'react-dom'

class Application extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello, MotherFucker!</h1>
        <p>I'm a React Component!</p>
      </div>
    );
  }
}

let test = document.getElementById('react');

ReactDOM.render(<Application />, test);
