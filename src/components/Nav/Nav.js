import { Link } from "react-router-dom";
// import { useState } from 'react';

import './Nav.css';

const Nav = () => {

  // const [selectedPost, setSelectedPost] = useState() 
  return <nav >
    <ul className="nav">
      <li className="navBtn">
        <Link className="navText" to="/">Home</Link>
      </li>
      <li className="navBtn">
        <Link className="navText" to="/list">Tareas</Link>
      </li>
      <li className="navBtn">
        <Link className="navText" to="/login">Log In</Link>
      </li>
      {/* <li className="navBtn">
        <Link className="navText" to={`/login/${selectedBtn}`}>Log In</Link>
      </li> */}
    </ul>
  </nav>
}

export default Nav;