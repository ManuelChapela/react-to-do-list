import React from 'react';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      priority:"ninguna"
    }
  }

  componentWillUnmount() {
    //...
  }
  
  newText = (ev) => this.setState( { text: ev.target.value } )
  newPriority = (el) => this.setState( { priority: el.target.value } )
  
  render() {
    return (
      <article >
        <h2 className={`${this.state.priority} ${this.props.claseCheck}`} > {this.props.title}</h2>
        {/* <h2 className={(this.props.claseCheck) ? 'true' : 'false'}> {this.props.title}</h2> */}
        <div className="editLine">
            <div className="btn" onClick={() => this.props.fnBorrar(this.props.keyy)} >Delete</div>
            {/* <div className="btn" onClick={() => this.props.fnEdit(this.props.keyy, this.state.text )}>Edit</div> */}
            <div className="btn" onClick={()=> this.props.btnEditNewPost(this.props.keyy)}>Edit</div>
            {/* <input className="editInput" type="text"  placeholder="Edita" onChange={this.newText}/> */}
            <select onChange={this.newPriority} className="selectBtn"  onClick={() => this.props.editPriority(this.props.keyy, this.props.statePriority)}>
                  <option className="ninguna" value="ninguna">Prioridad</option>
                  <option value="baja">Baja</option>
                  <option  value="media">Media</option>
                  <option  value="alta">Alta</option>
            </select>
            <input className="done" onClick={ ()=>this.props.tareaHecha(this.props.keyy) } type="checkbox" /> 
        </div>
      </article>
    )
  }
}

export default Post;