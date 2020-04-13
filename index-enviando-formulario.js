import React, { useState } from 'react';
import { render } from 'react-dom';


const Form = () => {
  let [title,setTitle] = useState("");
  let [body,setBody] = useState("");

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
        <input type='text' value ={title} id="title" onChange={ (ev) => setTitle(ev.target.value) } />
      </div>
      <div>
        <label htmlFor="body">Publicacion</label>
        <textarea type='text' value={body} id="body" onChange={ (ev) => setBody(ev.target.value) } />
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
}

const App = () => {
  return (
    <div> < Form /></div>
  );
}

render(<App />, document.getElementById('react_app'));