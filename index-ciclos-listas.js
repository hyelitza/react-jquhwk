import React from 'react';
import { render } from 'react-dom';

const nombres = [
  'Yeli', 'Emma', 'Vicky', 'Rosito'
]

function get_nombres() {
  const elementosLista = []
  for(var i=0;i < nombres.length;i++) {
    elementosLista.push(<li>{nombres[i]}</li>)
  } 
  console.log(elementosLista);
  return elementosLista
}

const Nombres1 = () => {
  return <ul>{ get_nombres() }</ul>
}

const Nombres = () => {
  return <ul> {
    nombres.map( (nombre,index) => <li key={index}>{ nombre }</li>)
  }
  </ul>
}

const App = () => {
  return <h1><Nombres/></h1>
}

render(<App />, document.getElementById('react_app'));

