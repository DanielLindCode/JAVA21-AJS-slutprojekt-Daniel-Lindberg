import React from "react";

const Cart = (props) => {
  const { cartItems, addItem, removeItem } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>
              <button onClick={() => removeItem(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => addItem(item)} className="add">
                +
              </button>
            </div>

            <div>
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div>
              <div>Items Price</div>
              <div>${itemsPrice.toFixed(2)}</div>
            </div>

            <div>
              <div>
                <strong>Total Price</strong>
              </div>
              <div>
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div>
              <button onClick={() => alert("Under construction!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};
export default Cart;
