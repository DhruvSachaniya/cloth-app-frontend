import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Landing/StartUp";
import RegisterPage from "./components/Landing/Register";
import { ToastContainer } from 'react-toastify';
import HomePage from "./components/Home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Home" element={<HomePage />} />
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
