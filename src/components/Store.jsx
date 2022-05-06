import Product from "./Product";

const Store = (props) => {
  const { products, addItem } = props;

  return (
    <div className="storeContainer">
      {products.map((product) => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};
export default Store;
