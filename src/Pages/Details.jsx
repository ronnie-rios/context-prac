import { useContext } from 'react';
import ProductContext from '../Context/Context';
import { useParams, useNavigate } from 'react-router-dom';

export default function Details() {
  const { products, cart, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  function addToCart() {
    cart.push(products[+id-1])
    dispatch({ type: 'ADD_PRODUCT', payload: cart });
  }
  return (
    <>
      <div>
        <h3>product details</h3>
        <h4>Name: {products[+id-1].name}</h4>
        <p>Desc: {products[+id-1].desc}</p>
        <p>Price: ${products[+id-1].price}</p>
        <button onClick={addToCart}>add to cart</button>
      </div>
      <button onClick={() => navigate('/checkout')}>checkout</button>
    </>
  )
}
