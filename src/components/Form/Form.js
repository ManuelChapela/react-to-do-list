import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.actualMode == 1 ? "" : this.props.texto
    }
  }

  handleTitle = event => this.setState({ title: event.target.value })
  
  handleNewPost = event => {
    event.preventDefault()
    this.props.addPost(this.state.title)
  }
  
  editPost = event => {
    // event.preventDefault()
    this.props.editPosts(this.props.keyy, this.state.title)
  }
  
 

  render() {
    if(this.props.actualMode == 1){
        return(   
          <form className="titleLine"> 
        {/* <div className="btn" onClick={()=> {{this.props.btnGoBack()}; {this.handleNewPost()}}}>Crear tarea</div> */}
        <input className="editInput" type="text" onChange={this.handleTitle} />
        <div className="btn" onClick={this.handleNewPost}>Crear tarea</div>
        <div className="btn" onClick={() => this.props.btnGoBack()}>Volver</div>
      </form>
     )  
    }else{
      return(   
        <form className="titleLine">
          <input className="editInput" value={this.state.title} type="text" onChange={this.handleTitle} />
          <div className="btn" onClick={this.editPost} >Editar tarea</div>
          <div className="btn" onClick={() => this.props.btnGoBack()}>Volver</div>
            </form>

            //     RECIBIR EL VALOR DE PADRE   +    RECIBIR EL ID (keyy) / 
      )
    }
    
}
}

export default Form;