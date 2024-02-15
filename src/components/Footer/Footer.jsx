import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainerStyled, LinksContainerStyled } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainerStyled>
      <p>
        Hecho por <span> Wenceslao!!! </span>
      </p>
    </FooterContainerStyled>
  );
};

export default Footer;
