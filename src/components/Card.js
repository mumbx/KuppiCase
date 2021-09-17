import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import history from "../services/history";

const Product = styled.div`
border-radius:5px;
display:flex;
flex-direction:column;
background-color: #18ff79;
padding:5px;
transition: background-color 0.3s, color 0.5s, trasform 3s;
cursor:pointer;

&:hover{
  background-color:black;
  color:white;
  transform: translateY(-3px);
}
`

const Picture = styled.img`
border-radius:5px;
min-width:100%;
height:300px
`

const Info = styled.div`
border-radius:5px;
width:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
height:100px;

h3{
  font-size:16px;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  text-align:center;
  align-self:center;
  margin-top:15px;
},

p{
  margin:0px;
  font-size:25px;
  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  text-align:center;
  justify-self:flex-end;
}

`

const Card = (props)=>{

  const history = useHistory()

  const viewProductInfo = (e)=>{
    const id = e.target.id
    const url = '/product/' + id

    if(id)
    history.push(url)

  }

  return (
    <Product onClick={viewProductInfo} id={props.id}>
      <Picture id={props.id} src={props.pic} />
      <Info id={props.id}>
        <h3>{props.name}</h3>
        <p>$ {props.price}</p>
      </Info>
    </Product>
  )

}

export default Card;
