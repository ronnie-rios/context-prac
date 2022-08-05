import { useContext } from 'react';
import ProductContext from '../Context/Context';

export default function Cart() {
    const { cart } = useContext(ProductContext);

  return (
    <div>
        <h2>checkout</h2>
        {cart.map((items) => (
            <div>
                <h4>{items.name}</h4>
                <h4>{items.price}</h4>
            </div>
        ))}
    </div>
  )
}
