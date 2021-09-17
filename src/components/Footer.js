import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logofooter.svg';

const FooterKuppi = styled.footer`
  grid-area: footer;
  background-color: rgb(56, 53, 57);
  width: 100%;
`;
const Hr = styled.hr`
  background-color: gray;
  height:1px;
  border:none;
  margin:0px;
`;

const Img = styled.img`
  width: 10%;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
`;

const Bottom = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 24%;
  font-family: 'Roboto', sans-serif;
`;

const Footer = () => {
  return (
    <FooterKuppi>
      <Top>
        <Img src={Logo} />
      </Top>
      <Hr />
      <Bottom>© 2021 Todos os direitos reservados a Antonio.</Bottom>
    </FooterKuppi>
  );
};

export default Footer;
