import './App.css';
import CartScreen from './Screen/CartScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import { HomeScreen } from './Screen/HomeScreen';
import { ProductScreen } from './Screen/ProductScreen';
import { Route, Routes, Navigate } from 'react-router-dom';
import SingleProduct from './Screen/SingleProduct';
import Success from './Screen/Success';

function App() {
  const user = false;
  // const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/products" element={<ProductScreen />} />
      <Route path="/products/:category" element={<ProductScreen />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/success" element={<Success />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <LoginScreen />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <RegisterScreen />}
      />
    </Routes>
  );
}

export default App;
