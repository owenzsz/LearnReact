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

const Product = ({product, selectState}) =>(
  <Container className='column is-3 is-centered'>
    <div className='product-card'>
      <img src={getProductImageURL(product)} ></img>
      <div class='product-info'>
        <div class='product-name'>{getProductName(product)}</div>
        <div class='product-description'> {getProductDescription(product)}</div>
        <div class='product-price'> {getProductPrice(product)}</div>

        <Button.Group class='product-sizes'>
          <Button>S</Button>
          <Button>M</Button>
          <Button>L</Button>
          <Button>XL</Button>
        </Button.Group>
      </div>

      <Button onClick={()=>{selectState.addToCart(product, true);}}>Add to cart</Button>
    </div>
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