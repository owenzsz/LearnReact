import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container, Title } from 'rbx';
import './App.css'
import './bulma.min.css'


const UseSelection = () => {
  const [selected, setSelected] = useState([]);
  const [addedTimes, setAddedTimes] = useState(0);
  //add product to cart
  const addToCart = (x, add = true) => {
    if (add) {
      setSelected([x].concat(selected));
    } else {
      selected.splice(selected.indexOf(x), 1);
      setSelected(selected);
    }
  };
  return [ selected, addToCart ];
};

const buttonColor = selected => (
  selected ? 'success' : 'null'
);

const ShoppingCart =({products, selectState}) =>(
  null
)

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
const getProductDescription = product =>{
  if(product.description){
    return product.description
  }
  else{
    return 'No description'
  }
  
}
const getProductImageURL = product =>(
  './data/products/'+product.sku+'_1.jpg'
)

const App = () => {
  const [data, setData] = useState({});
  const [inventoryData, setInventoryData] = useState({});
  const [selected, addToCart] = UseSelection();
  const [state, setState] = useState({right: false});

  const products = Object.values(data);
  const inventory = Object.values(inventoryData);
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



export default App;