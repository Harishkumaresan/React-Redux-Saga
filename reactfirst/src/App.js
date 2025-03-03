
import './App.css';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import Header1 from './Components/Header1';
import Main from './Components/main';
import {Routes,Route} from 'react-router-dom'
import Product from './Components/Product';
function App() {
  
  return (
    <div className="App">
    <Routes>
    <Route path='/'  element={<Main />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path='/cart'  element={<Cart />} />
    <Route path='/checkout'  element={<CheckOut />} />
    </Routes>
    </div>
  );
}

export default App;
