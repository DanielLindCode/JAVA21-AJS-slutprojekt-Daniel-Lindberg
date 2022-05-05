import { useState } from "react";
import Product from "./Product";

export default Store = (props) => {
  const { products, addItem } = props;

  return (
    <div className="storeContainer">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};
