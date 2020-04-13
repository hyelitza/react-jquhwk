import React from 'react';
import { render } from 'react-dom';

const Saludar0 = ({nombre,idioma}) => {
  console.log(idioma);
  const saludo = idioma === 'en' ? 'Hello' : 'Hola';
  return <p>{saludo} {nombre}</p>
}

Saludar0.defaultProps = {
  idioma : 'en'
}

const Saludar = ({nombre,idioma = 'en'}) => {
  console.log(idioma);
  const saludo = idioma === 'en' ? 'Hello' : 'Hola';
  return <p>{saludo} {nombre}</p>
}


const App = () => {
  return <h1><Saludar nombre='Yeli' idioma = 'es'/></h1>
}

render(<App />, document.getElementById('react_app'));
