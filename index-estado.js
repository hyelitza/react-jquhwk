import React, { useState } from 'react';
import { render } from 'react-dom';

const Button0 = () => {
  return (
    <div>
      <p>Presionado: 0</p>
      <button>Click me!</button>
    </div>
  )
}

const Button1 = () => {
  const [counter,setCounter] = useState(0);
  return (
    <div>
      <p>Presionado: { counter }</p>
      <button onClick = { () => console.log(':P') }>Click me!</button>
    </div>
  )
}

const Button = () => {
  const [counter,setCounter] = useState(0);
  return (
    <div>
      <p>Presionado: { counter }</p>
      <button onClick = { () => setCounter(counter+1) }>Click me!</button>
    </div>
  )
}

const App = () => {
  return <div><Button /></div>
}

render(<App />, document.getElementById('react_app'));