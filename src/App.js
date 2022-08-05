import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './Context/Context';
import Home from './Pages/Home';
import Details from './Pages/Details';
import Checkout from './Pages/Checkout';
import Confirmation from './Pages/Confirmation';


function App() {
  return (
    <ProductProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path ='/:id' element={<Details />} />
          <Route path ='/checkout' element={<Checkout />} />
          <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
    </ProductProvider>
  );
}

export default App;
