import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container} from 'rbx';
import './App.css'
import './bulma.min.css'

const ProductsList = ({products, addToCart}) => (
  <div className='products-list columns is-multiline'>
    {products.map(product => <Product product={product} addToCart={addToCart} />)}
  </div>
  
)

const ShoppingCart= ({contents, removeFromCart}) =>{
  return(
    <div>
      {contents.map(product=> <ShoppingCartItem product={product} removeFromCart={removeFromCart} />)}
    </div>
  )
}

const ShoppingCartItem = ({product, removeFromCart}) => {
  return(
    <Container>
      {product.title}
      <Button onClick={()=>{removeFromCart(product);}}>Remove from cart</Button>
    </Container>
    
  )
  
}

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


const App = () => {
  
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const products = Object.values(data);

  const addToCart = (product) =>{
    setCartItems(cartItems.concat(product))
  }

  const removeFromCart =(product) =>{
    setCartItems(cartItems.filter(item=>item.sku!=product.sku));
    console.log(cartItems)
  }


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
      <ProductsList products={products} addToCart={addToCart} />
      <ShoppingCart contents={cartItems} removeFromCart={removeFromCart}/>
    </Container>
  );
};

export default App;