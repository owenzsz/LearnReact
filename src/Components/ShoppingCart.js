import React, { useEffect, useState } from 'react';
import 'rbx/index.css';
import { Button, Container} from 'rbx';
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

  export default ShoppingCart;