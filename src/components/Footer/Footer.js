import React from 'react';
import './Footer.css';

/*
const Footer = props => {
  let output = "";

  if(typeof props.order === "string") {
    output = props.order;
  }
  else {
    output = `${props.order.id} ${props.order.name}`;
  }

  return (
    <footer>[FOOTER'S MOVIDAS {output}]</footer>
  )
}
*/
const Footer = props => {
  //const output = <footer>[FOOTER'S MOVIDAS {typeof props.order === "string" ? props.order : `${props.order.id} ${props.order.name}`}]</footer>
  const output = <footer>
    <small>&copy; Copyright - {props.brand}</small>
  </footer>

  return output;
}

export default Footer;