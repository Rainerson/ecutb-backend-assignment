import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import ProductDetails from "./views/ProductDetails";
import Products from "./views/Products";
import ProductProvider, { ProductContext } from "./contexts/ProductContext";
import ProductGridSmall from "./sections/ProductGridSmall";

function App2() {
  return (
    // <></> Kallas för en fragment när det bara är taggar (?), allt måste vara inom denna (ett parent-element)
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/products/:id"
            element={<ProductDetails></ProductDetails>}
          ></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App2;
