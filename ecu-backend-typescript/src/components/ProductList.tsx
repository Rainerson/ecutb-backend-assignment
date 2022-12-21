import React, { useEffect } from "react";
import { IProductContext, ProductCRUDContext } from "../contexts/ProductCRUDContext";
import { ProductItem2 } from "../models/ProductModel";

const ProductList = () => {
  const { products, getAll, remove } = React.useContext(
    ProductCRUDContext
  ) as IProductContext;

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <h3 className="display-6 mb-4">List of Products</h3>
      {products.map((product: ProductItem2) => ( <div key={product.articleNumber} className="mb-3">{product.articleNumber}{product.name}{product.price}</div>))}
    </>
  );
};

export default ProductList;
