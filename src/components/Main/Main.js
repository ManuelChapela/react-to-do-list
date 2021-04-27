import React from 'react';
import './Main.css';
//import spinner from './spinner.gif';

import Post from '../Post/Post';
import Form from '../Form/Form';
// import Search from '../Search/Search'
import getPosts from '../../data/dataProvider';



// ----------- STATE ITNITIAL
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      user: this.props.user || "",
      limit: 10,
      mode: 0,
      selected: -1,
      search: ""
    }
  }
  
  addPost = (title) => { 
    this.setState({
      posts: [...this.state.posts, { title,  check: false, priority: "baja"}],
      mode: 0
    });
  }

  async componentDidMount() {
    const newPosts = await getPosts()
    this.setState({ posts: [...this.state.posts, ...newPosts] });
  }
  
  // ---------- CONEXIÓN CON EL COMPONENTE POST
  drawPosts = () => {
    if (this.state.search == "") {
      // {this.addPost}
      console.log(this.state.search);
      return this.state.posts.map((item, i) =>
          <Post title={item.title} fnBorrar={this.deletePosts} keyy={i} fnEdit={this.editPosts} fnFlag={this.loadPosts} tareaHecha={this.tareaHecha} claseCheck={item.check} editPriority={this.editPriority} statePriority={item.priority} btnEditNewPost={this.btnEditNewPost}/>
      )
    }else{
      return <h1>Estás buscando guay. Solo necesitas escribir la robermagicmap </h1>
    }
    }
      
// ---------- FUNCIÓN ELIMINAR AL HACER CLIC EN EL BOTON de POST
  deletePosts = (el) => { 
          const task = this.state.posts.filter((index, i )=> i !== el);
          this.setState({posts: task})
        
      }
      
// ---------- FUNCIÓN EDITAR AL HACER CLIC EN EL BOTON de POST
  editPosts = (i, newTitle) => {
    const newTitles = [...this.state.posts];  // Copy of an array
    newTitles[i].title = newTitle             // Modificar la copia con la i y el nuevo título
    this.setState({ posts: newTitles, mode:0})       // Se sustituye el nuevo título
    }
    
    // --------- Tarea hecha, cambio de clase, tacha.
  tareaHecha = (i) =>{   
    const newPosts = this.state.posts.map((el, index) => {      // Se hace un map de un array y si el key(i) coincide con el index, se le cambia el estado a check (que está dentro de posts). Se returna el elemento modificado. Y se cambia el estado a este objeto newPosts
      if(i == index){
          el.check = !el.check
        }
        return el
      }
      )
      this.setState({posts: newPosts})                          // Aquí se atribuye el nuevo estado de posts con newPosts
    }
  
// ------ Editar la prioridad para que se pinte según prioridad media alta o baja
  editPriority = (i, statePriority) => {
      const priority2 = this.state.posts.map((el, index) => {
        return el.priority
      })
      this.setState({ priority: priority2})
    }
    
  btnGoBack = () => {
      this.setState({mode:0})
    }
  btnCreateNewPost = () => {
      this.setState({mode: 1})
    }
  btnEditNewPost = (id) => {
      this.setState({mode: 2, selected: id})
    }

  searchPosts = (el) => this.setState( { search: el.target.value } )


  render() {
    return (
       (this.state.mode == 0) ?
          <main>
              <h1>Hola, {this.state.user ? this.state.user : "¡qué pasa Chape!"}</h1>
              <div className="editLine" >
                  <input placeholder="  Busca aquí tu contenido..." type="text" value={this.state.posts.search} className="editInput" onChange={this.searchPosts}/> 
                  {/* <Search searchPosts={this.state.selected, this.state.mode}/>             */}
                  <div className="btn" onClick={()=> this.btnCreateNewPost()} >Crear nueva</div>
              </div>
              {this.drawPosts()}    
          </main> 
      : 
      (this.state.mode == 1) ?
      <main>
            <h1> Crea ahí una tarea como: <br /> ¡Que agsco de React!</h1>
            <Form btnGoBack={this.btnGoBack} actualMode={this.state.mode} createNewPost={this.createNewPost} addPost={this.addPost} editPosts={this.editPosts} />
      </main>

    :  
    (this.state.mode == 2) ?
          <main>
<             h1>Venga, échale una editadiña ahí</h1>
                <Form btnGoBack={this.btnGoBack} actualMode={this.state.mode} editPosts={this.editPosts} texto={this.state.posts[this.state.selected].title} keyy={this.state.selected}/> 
          </main> 
              : " "
        )  
      }
}

export default Main;