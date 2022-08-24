import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Products from "./components/Products";
import Singleproduct from "./components/Singleproduct";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Singleproduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
