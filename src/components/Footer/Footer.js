import React from 'react';
import './Footer.css';


const Footer = props => {
  //const output = <footer>[FOOTER'S MOVIDAS {typeof props.order === "string" ? props.order : `${props.order.id} ${props.order.name}`}]</footer>
  const output = <footer>
    <small>&copy; Copyright - {props.brand}</small>
  </footer>

  return output;
}

export default Footer;