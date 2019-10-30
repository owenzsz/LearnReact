import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container} from 'rbx';
import '../../src/App.css'
import '../../src/bulma.min.css'
const ProductsList = ({products, addToCart}) => (
    <div className='products-list columns is-multiline'>
      {products.map(product => <Product product={product} addToCart={addToCart} />)}
    </div>
    
  )
  
  const Product = ({product, addToCart}) =>{
    return(
    <Container className='column is-3 is-centered'>
      <div className='product-card'>
        <img src={getProductImageURL(product)} ></img>
        <div class='product-name'>{getProductName(product)}</div>
        <div class='product-price'> {getProductPrice(product)}</div>
  
        <Button.Group class='product-sizes'>
            <Button>S</Button>
            <Button>M</Button>
            <Button>L</Button>
            <Button>XL</Button>
          </Button.Group>
  
        <Button onClick={()=>{addToCart(product);}}>Add to cart</Button>
      </div>
    </Container>
    )
  };
  
  const getProductName = product => (
    product.title
  );
  
  const getProductPrice = product =>(
    product.price
  );
  
  const getProductImageURL = product =>(
    './data/products/'+product.sku+'_1.jpg'
  )

  export default ProductsList;
  