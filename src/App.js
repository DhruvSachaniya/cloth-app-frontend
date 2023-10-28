import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Landing/StartUp";
import RegisterPage from "./components/Landing/Register";
import { ToastContainer } from 'react-toastify';
import HomePage from "./components/Home/home";
import ProductPage from "./components/products/ProductPage";
import CartPage from "./components/Cart/CartHomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/productinfo/:productId" element={<ProductPage/>}/>
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
