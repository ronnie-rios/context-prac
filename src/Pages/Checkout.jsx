import React, { useContext } from 'react';
import Cart from '../Components/Cart';
import Form from '../Components/Form';
import ProductContext from '../Context/Context';
import HomeButton from '../Components/HomeButton';

export default function Checkout() {
  const { cart } = useContext(ProductContext);

  if (cart.lengt === 0) {
    return (
      <div>
        <h4>nothing in cart yetr</h4>
        <HomeButton />
      </div>
    )
  } else {
    return (
      <div>
      <h2>checkout</h2>
      <Cart />
      <Form />
    </div>
  )
}
}
