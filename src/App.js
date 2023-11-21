import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Landing/StartUp";
import RegisterPage from "./components/Landing/Register";
import { ToastContainer } from 'react-toastify';
import HomePage from "./components/Home/home";
import ProductPage from "./components/products/ProductPage";
import CartPage from "./components/Cart/CartHomePage";
import WishListPage from "./components/WishList/WIshListHomePage";
import OrdersPage from "./components/Order/orderHomepage";
import CheckoutHomePage from "./components/Checkout/CheckoutHome";

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
          <Route path="/wishlist" element={<WishListPage/>} />
          <Route path="/order" element={<OrdersPage />} />
          <Route path="/checkout" element={<CheckoutHomePage/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
    </>
  );
}

export default App;
