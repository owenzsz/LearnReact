import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';
import './App.css'
import './bulma.min.css'

const App = () => {
  const [data, setData] = useState({});
  const products = Object.values(data);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('./data/products.json');
      const json = await response.json();
      setData(json);
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <ProductsList products={products} />
    </Container>
  );
};

const ProductsList = ({products}) => (
  <div className='products-list columns is-multiline'>
    {products.map(product => <Product product={product} />)}
  </div>
)

const Product = ({product}) =>(
  <Container className='product-card column is-3'>
    <div>{getProductName(product)}</div>
    <div>${getProductPrice(product)}</div>
    <Button>Add to cart</Button>
  </Container>
);

const getProductName = product => (
  product.title
);

const getProductPrice = product =>(
  product.price
);

export default App;