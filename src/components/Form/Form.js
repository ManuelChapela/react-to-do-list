import React from 'react';
import './Form.css';
import { useState } from 'react';

const Form = ({ actualMode, texto, addPost, editPosts, keyy, btnGoBack }) => {
  
  const [title, setTitle] = useState(actualMode == 1 ? "" : texto)

  const handleTitle = event => setTitle(event.target.value)
  
 const handleNewPost = event => {
    event.preventDefault()
    addPost(title)
  }
  
  const editPost = event => {
    event.preventDefault()
    editPosts(keyy, title)
  }
  
    if(actualMode == 1){
        return(   
        <form className="titleLine"> 
            <input className="editInput" type="text" onChange={handleTitle} />
            <div className="btn" onClick={handleNewPost}>Crear tarea</div>
            <div className="btn" onClick={() => btnGoBack()}>Volver</div>
        </form>
     )  
    }else{
      return(   
        <form className="titleLine">
            <input className="editInput" value={title} type="text" onChange={handleTitle} />
            <div className="btn" onClick={editPost} >Editar tarea</div>
            <div className="btn" onClick={() => btnGoBack()}>Volver</div>
        </form>
      )
    }   
}

export default Form;