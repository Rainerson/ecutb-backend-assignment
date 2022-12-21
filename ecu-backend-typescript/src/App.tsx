import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCreateForm from "./components/ProductCreateForm";
import ProductList from "./components/ProductList";
import ProductUpdateForm from "./components/ProductUpdateForm";
import ProductCRUDProvider from "./contexts/ProductCRUDContext";


export const App: React.FC = () => {
  return (
    <ProductCRUDProvider>
      <div className="container mt-5">
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<ProductCreateForm></ProductCreateForm>}></Route>
        <Route path='/:articleNumber' element={<ProductUpdateForm></ProductUpdateForm>}></Route>
       </Routes>
       </BrowserRouter>
        <hr className="my-5"></hr>
        <ProductList></ProductList>
      </div>
    </ProductCRUDProvider>
  );
};
