import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Start from '../src/Components/Start/Start';
import Cart from './Components/cart/Cart';
import { useState} from 'react';


function App() {
  const [cartItems, setCartItems] = useState([]);

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Start/>}/>
        </Routes>
      </Router>
    );
}

export default App;
