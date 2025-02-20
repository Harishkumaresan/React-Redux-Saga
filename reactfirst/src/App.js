
import './App.css';
import Cart from './Components/Cart';
import Header1 from './Components/Header1';
import Main from './Components/main';
import {Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <div className="App">
    <Routes>
    <Route path='/'  element={<Main />} />
    <Route path='/cart'  element={<Cart />} />
    </Routes>
    </div>
  );
}

export default App;
