import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container} from 'rbx';
import './App.css'
import './bulma.min.css'
import ShoppingCart from './Components/ShoppingCart';
import ProductsList from './Components/ProductsList'



const App = () => {
  
  const [data, setData] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const products = Object.values(data);

  const addToCart = (product) =>{
    setCartItems(cartItems.concat(product))
  }

  const removeFromCart =(product) =>{
    setCartItems(cartItems.filter(item=>item.sku!=product.sku));
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