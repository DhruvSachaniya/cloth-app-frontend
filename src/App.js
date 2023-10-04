import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LoginPage from "./components/Nav/Home/StartUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/Home" element={<Nav/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
