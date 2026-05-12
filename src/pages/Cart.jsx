import { useCart } from "../context/CartContext";
import "../styles/cart.css";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice
  } = useCart();

  return (
    <div className="cart">

      <h1 className="cart__title">YOUR CART</h1>

      {cartItems.length === 0 ? (
        <p className="cart__empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart__list">

            {cartItems.map((item) => (
              <div className="cart__item" key={item.id}>

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}$</p>
                </div>

                <div className="cart__controls">

                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>

                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  remove
                </button>

              </div>
            ))}

          </div>

          <div className="cart__footer">

            <h2>Total: {totalPrice}$</h2>

            <button onClick={clearCart}>
              Clear Cart
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;