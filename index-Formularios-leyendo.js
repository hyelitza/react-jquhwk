import React, { useState } from 'react';
import { render } from 'react-dom';


const Form = () => {
  let [title,setTitle] = useState("");
  let [body,setBody] = useState("");

  return (
    <form>
      <div>
        <label htmlFor="title">Titulo</label>
        <input type='text' id="title" onChange={ (ev) => setTitle(ev.target.value) } />
      </div>
      <div>
        <label htmlFor="body">Publicacion</label>
        <textarea type='text' id="body" onChange={ (ev) => setBody(ev.target.value) } />
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
