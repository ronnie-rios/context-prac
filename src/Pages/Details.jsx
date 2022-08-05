import { useContext } from 'react';
import ProductContext from '../Context/Context';
import { useParams } from 'react-router-dom';

export default function Details() {
  const { products, cart } = useContext(ProductContext);
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h3>product details</h3>
      <h4>Name: {products[+id-1].name}</h4>
      <p>Desc: {products[+id-1].desc}</p>
      <p>Price: ${products[+id-1].price}</p>
      <button>add to cart</button>
    </div>
  )
}
