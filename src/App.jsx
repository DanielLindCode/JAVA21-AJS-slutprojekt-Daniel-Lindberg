import React, { useState } from "react";

import data from "./data";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Login from "./components/Login";

const App = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeItem = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <Login />
      <Store products={products} addItem={addItem} />
      <Cart cartItems={cartItems} addItem={addItem} removeItem={removeItem} />
    </div>
  );
};

export default App;

// json-server react-db.json --watch --port=5000

// Vad har varit utmanande?
// Vad har varit roligt?
// Vad hade ni gjort annorlunda?

//context - states
