import React from 'react';
import './Post.css';
import { useState } from 'react';


const Post = ({ keyy, statePriority, editPriority, fnBorrar, btnEditNewPost, claseCheck, title, tareaHecha }) => {

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("ninguna");

  const newText = (ev) => setText( { text: ev.target.value } )
  const newPriority = (el) => setPriority( el.target.value )
  
    return (
      <article >
        <h2 className={`${priority} ${claseCheck}`} > {title}</h2>
        <div className="editLine">
            <div className="btn" onClick={() => fnBorrar(keyy)} >Delete</div>
            <div className="btn" onClick={()=> btnEditNewPost(keyy)}>Edit</div>
            <select onChange={newPriority} className="selectBtn"  onClick={() => editPriority(keyy, statePriority)}>
                  <option className="ninguna" value="ninguna">Prioridad</option>
                  <option value="baja">Baja</option>
                  <option  value="media">Media</option>
                  <option  value="alta">Alta</option>
            </select>
            <input className="done" onClick={ ()=>tareaHecha(keyy) } type="checkbox" /> 
        </div>
      </article>
    )
}

export default Post;