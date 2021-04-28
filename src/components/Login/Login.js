import React from 'react';

import './Login.css';

const Login = () => {
  return (
  <>
  <form action="" className="logForm">
      <input className="editInput" type="text" placeholder=" Escribe aquí tu contraseña"/>
      <input className="editInput" type="text" placeholder=" Escribe aquí tu usuario"/>
      <button className="btnSend">Enviar</button>


  </form>

  </>
  )
}

export default Login;