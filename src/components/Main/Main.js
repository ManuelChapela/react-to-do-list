import React from 'react';
import './Main.css';
import Post from '../Post/Post';
import Form from '../Form/Form';
import getPosts from '../../data/dataProvider';
import { useState, useEffect } from 'react';


const Main = ({ user}) => {
  const [posts, setPosts] = useState([]);
  const [usuario, setUsuario] = useState(user || "");
  const [mode, setMode] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [search, setSearch] = useState("");

  
  const addPost = (title) => { 
    setPosts( [...posts, { title,  check: false, priority: "baja"} ])
    setMode(0)
    console.log(posts.priority);
  }
  
  useEffect(() => {
    const newPosts =  getPosts()
    setPosts( [...posts, ...newPosts] );
  },[]);
  
  const drawPosts = () => {
    if (search == "") {
      console.log("00", search);
      console.log("0", posts);
      return posts.map((item, i) =>
          <Post title={item.title} fnBorrar={deletePosts} keyy={i} fnEdit={editPosts} tareaHecha={tareaHecha} claseCheck={item.check} editPriority={editPriority} statePriority={item.priority} btnEditNewPost={btnEditNewPost}/>
      )
    }else{

      return ( 
      posts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())).map(( item, i ) => <Post  title={item.title} fnBorrar={deletePosts} keyy={i} fnEdit={editPosts} tareaHecha={tareaHecha} claseCheck={item.check} editPriority={editPriority} statePriority={item.priority} btnEditNewPost={btnEditNewPost}/>)
      // <h1>Estás buscando guay. Solo necesitas escribir la robermagicmap </h1> 
      ) 
    }
    }
      
// ---------- FUNCIÓN ELIMINAR AL HACER CLIC EN EL BOTON de POST
  const deletePosts = (el) => { 
          const del = posts.filter((index, i )=> i !== el);
          setPosts(del)
        
      }
      
// ---------- FUNCIÓN EDITAR AL HACER CLIC EN EL BOTON de POST
  const editPosts = (i, newTitle) => {
    const newTitles = [...posts]; 
    newTitles[i].title = newTitle            
    setPosts(newTitles)
    setMode(0)  
    }
    
    // --------- Tarea hecha, cambio de clase, tacha.
  const tareaHecha = (i) =>{   
    const newPosts = posts.map((el, index) => {      // Se hace un map de un array y si el key(i) coincide con el index, se le cambia el estado a check (que está dentro de posts). Se returna el elemento modificado. Y se cambia el estado a este objeto newPosts
      if(i == index){
          el.check = !el.check
        }
        return el
      }
      )
      setPosts(newPosts)                          // Aquí se atribuye el nuevo estado de posts con newPosts
    }
  
// ------ Editar la prioridad para que se pinte según prioridad media alta o baja
  const editPriority = (i, statePriority) => {
    const newPost = [...posts]
    newPost[i].priority = statePriority       
    setPosts(newPost)
    }
    
  const btnGoBack = () => {
      setMode(0)
    }
  const btnCreateNewPost = () => {
     setMode(1)
    }
  const btnEditNewPost = (id) => {
    setMode(2)
    setSelected(id)
    }

  const searchPosts = (el) => setSearch( el.target.value )


      return (
       (mode == 0) ?
          <main>
              <h1> {usuario ? "Hola" + usuario + ",estas son tus tareas pendientes": "Hola, estas son tus tareas pendientes"}</h1>
              <div className="editLine" >
                  <input placeholder="  Busca aquí tu contenido..." type="text" value={posts.search} className="editInput" onChange={searchPosts}/> 
                  {/* <Search searchPosts={this.state.selected, this.state.mode}/>             */}
                  <div className="btn" onClick={()=> btnCreateNewPost()} >Crear nueva</div>
              </div>
              {drawPosts()}    
          </main> 
      : 
      (mode == 1) ?
      <main>
            <h1> Crea ahí una tarea como: <br /> ¡Que agsco de React!</h1>
            <Form btnGoBack={btnGoBack} actualMode={mode} addPost={addPost} editPosts={editPosts} />
      </main>

    :  
    (mode == 2) ?
          <main>
<             h1>Venga, échale una editadiña ahí</h1>
                <Form btnGoBack={btnGoBack} actualMode={mode} editPosts={editPosts} texto={posts[selected].title} keyy={selected}/> 
          </main> 
              : " "
        )  
      } 

export default Main;