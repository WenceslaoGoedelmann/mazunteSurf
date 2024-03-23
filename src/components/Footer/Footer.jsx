import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainerStyled, LinksContainerStyled } from './FooterStyles';
import w3g from "./logo2.png";
const Footer = () => {
  return (
    <FooterContainerStyled>
      <p>Copyright © Todos los derechos reservados. Mazunte Surf</p>
      
      <a href='https://wenceslao-goedelmann.vercel.app/'>
      Pagina realizada por  
      <img src={w3g} alt="" />
      </a>   
    </FooterContainerStyled>
  );
};

export default Footer;
