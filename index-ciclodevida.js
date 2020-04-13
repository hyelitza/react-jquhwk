import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';



const Button = () => {
  const [counter,setCounter] = useState(0);
  useEffect(() => {
    console.log('me ejecute');
    return () => { console.log('Bye')}
  },[]);
  return (
    <div>
      <button onClick = { () => setCounter(counter+1) }>Click me! { counter }</button>
    </div>
  )
}

const App = () => {
  const [showButton, setShowButton] = useState(true);
  return (<div>
    <button onClick={() => setShowButton(false) } >Delete Button</button>
    <div>
       {showButton && <Button />}
    </div>
  </div>
  )
}

render(<App />, document.getElementById('react_app'));