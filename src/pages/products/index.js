import React from 'react';
import styled from 'styled-components';
import Cards from '../../components/Cards'

const Main = styled.main`
padding:0px 50px;
grid-area:content;
display:flex;
flex-direction:column;
`
const Titulo = styled.h1`
font-size:30px;
font-family: 'Roboto', sans-serif;
margin-top:5px;
text-align:center;
`

const Index = ()=>{

  return (

    <Main>
      <Titulo>PRODUTOS</Titulo>
      <Cards/>
    </Main>

  )
}

export default Index;
