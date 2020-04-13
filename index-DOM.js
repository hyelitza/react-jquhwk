import React, { useState, useEffect, useRef} from 'react';
import { render } from 'react-dom';


const Form = ( { showed }) => {
  let [title,setTitle] = useState("");
  let [body,setBody] = useState("");

  const firstInput = useRef();

  useEffect(() => {
    /// actaulizar el DOm es un efecto secundario
    console.log(showed)
    if (showed) {
      console.log(firstInput);
      firstInput.current.focus();
    }
  },[showed])


  const sendForm = (ev) => {
    ev.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      setTitle("");
      setBody("");
      console.log(json)}
    )
  }

  return (
    <form onSubmit = { (ev) => sendForm(ev)}>
      <div>
        <label htmlFor="title">Titulo</label>
        <input type='text' value ={title} id="title" onChange={ (ev) => setTitle(ev.target.value) } ref = {firstInput} />
      </div>
      <div>
        <label htmlFor="body">Publicacion</label>
        <textarea type='text' value={body} id="body" onChange={ (ev) => setBody(ev.target.value) } />
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
}

const Acordion = () => {
  const [show,setShow] = useState(false);
  return (
    <div>
      <button onClick={ ()=> setShow(true) } >Mostrar formulario</button>
      {show && < Form showed={show}/>}
    </div>
  );
}

const App = () => {
  return (
    <div> < Acordion /></div>
  );
}

render(<App />, document.getElementById('react_app'));
