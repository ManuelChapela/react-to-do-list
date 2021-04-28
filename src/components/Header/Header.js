import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo_2.gif'


const Header = () => {

    return (
      <header>
        <img className="logo" src={logo} alt="Logo de la empresa" />
      {/* <Nav /> */}
      </header>
    );
  
}

export default Header;