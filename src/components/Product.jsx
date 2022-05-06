import React from "react";

const Product = (props) => {
  const { product, addItem } = props;

  return (
    <div className="cards">
      <article className="card">
        <img src={product.image} alt={product.name} />
        <div className="text">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addItem(product)}>Add To Cart</button>
        </div>
      </article>
    </div>
  );
};

export default Product;
