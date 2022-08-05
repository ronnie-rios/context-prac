import { useContext } from 'react';
import ProductContext from '../Context/Context';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { products, cart } = useContext(ProductContext);
  const navigate = useNavigate()

  return (
    <div>
      <h2>cat products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <button onClick={() => navigate(`${product.id}`)}>view details</button>
        </div>
      ))}
    </div>
  )
}
