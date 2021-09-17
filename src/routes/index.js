import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Products from '../pages/products/index'
import ProductsInfo from '../pages/products/info'
import Route from './Route';

export default function Routes() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/product/:id" component={ProductsInfo} />
      </Switch>
    </BrowserRouter>
    <Footer/>
    </>
  );
}
