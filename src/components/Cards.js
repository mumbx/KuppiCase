import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductServices from '../services/api';
import Card from './Card';

const CardWrapper = styled.div`
  margin-top:15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap:30px;
  flex: 1;
`;

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const Products = await ProductServices.getProducts();
    setProducts(Products.data);
  };


  const CardRender = () => {
    console.log(products);
    return products.map((product) => (

      <Card
        key={product.id}
        id={product.id}
        pic={product.photo_url}
        name={product.name}
        price={product.price}
      />

    ));


  };

  return <CardWrapper>{CardRender()}</CardWrapper>;
};

export default Cards;
