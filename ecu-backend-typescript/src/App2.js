import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import ProductDetails from "./views/ProductDetails";
import Products from "./views/Products";
import ProductProvider from "./contexts/ProductContext";


function App2() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/products/:articleNumber"
            element={<ProductDetails></ProductDetails>}
          ></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App2;
