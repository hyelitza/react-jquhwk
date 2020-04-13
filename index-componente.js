import React, { Component } from 'react';
import { render } from 'react-dom';

const App0 = () => {
  return <h1>hola</h1>
}

class App extends Component {
  render(){
    return <h1>Hola!!</h1>
  }
}

render(<App />, document.getElementById('react_app'));


