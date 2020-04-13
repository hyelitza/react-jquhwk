import React from 'react';
import { render } from 'react-dom';

function SaludaEnIdiomas({idioma}) {
  if (idioma === "es") return <span>Hola</span>;
  if (idioma === "en") return <span>Hello</span>;
}
const Saludo0 = () => {
  const nombre = "Hilda";
  return <p><SaludaEnIdiomas idioma="en" /> { `${ nombre }`}</p>;
}

const Saludo1 = () => {
  const nombre = "Hilda";
  const idioma = "en";
  return(
  <div>
    {
      idioma === 'es' && <span>Hola</span>
    }
    {
      idioma === 'en' && <span>Hello</span>
    }
  </div>
  )
}

const Saludo = () => {
  const nombre = "Hilda";
  const idioma = "en";
  return(
  <div>
    {
      idioma === 'es' ? <span>Hola</span> : <span>Hello</span>
    }
  </div>
  )
}



const App = () => {
  return <h1><Saludo/></h1>
}

render(<App />, document.getElementById('react_app'));
