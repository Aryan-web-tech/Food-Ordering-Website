import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './pages/Signup.js';
import { CartProvider } from './components/ContextReducer.js';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/createuser" element={<Signup />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
