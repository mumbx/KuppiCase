import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import ProductServices from '../../services/api';

const ProductInfo = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();
  const history = useHistory()
  const getProduct = async (id) => {
    const _product = await ProductServices.getProductById(id);
    setProduct(_product.data);
  };

  useEffect(() => {
    getProduct(id);
  });

  const goBack = ()=>{
    history.goBack()
  }

  return (
    <Main>
      <Titulo>{product.name}</Titulo>
      <Card>
        <Picture src={product.photo_url} />
        <Details>
          <h2> {product.name}</h2>

          <div>
            <h3>🟩DESCRIPTION</h3>
            <p>{product.description}</p>
          </div>

          <div>
          <h3>🟩CATEGORY</h3>
          <p>{product.category}</p>
          </div>


          <span>$ {product.price}</span>

          <h1 onClick={goBack}>Back to Products</h1>
        </Details>

      </Card>
    </Main>
  );
};

export default ProductInfo;

const Main = styled.main`
  padding: 0px 50px;
  grid-area: content;
  display: flex;
  flex-direction: column;
`;
const Titulo = styled.h1`
  font-size: 30px;
  font-family: 'Roboto', sans-serif;
  margin-top: 5px;
  text-align: center;
`;
const Card = styled.div`
  width: 50%;
  margin-top: 15px;
  flex: 1;
  display: flex;
  background-color: #18ff79;
  padding: 5px;
  align-self: center;
`;
const Details = styled.div`
  width: 50%;
  margin-top: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  padding: 5px;

  h2,
  h3 {
    margin-bottom:10px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    text-transform: uppercase;

    font-weight: bolder;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }

  span {

    margin: 0px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    text-align: center;
    justify-self: flex-end;
  }

  div {

    padding:15px;
  }

  h1{
    font-size:18px;
    justify-self: flex-end;
    align-self:center;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    cursor:pointer;
  }
`;
const Picture = styled.img`
  border-radius: 5px;
  width: 50%;
  height: 100%;
`;
