import React from 'react';
import styled from 'styled-components';
import Logo from '../img/logo.png'

const HeaderKuppi = styled.header`
display:flex;
justify-content:center;
align-items:center;
background-color: #18ff79;
width: 100%;
grid-area:header;

`
const Img = styled.img`
width: 10%;
`;

const Header = ()=>{

  return (
    <HeaderKuppi>
      <Img src={Logo}/>
    </HeaderKuppi>
  )
}


export default Header;
