import { useCartDispatch, useCartSelector } from "../hooks/hook";
import { Cart, addToCart, removeFromCart } from "../store/cart-slice";

export default function CartItems() {
  const { items: cartItems } = useCartSelector(state => state.cart);
  const dispatch = useCartDispatch();

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  function handleAddToCart(item: Cart) {
    dispatch(addToCart(item));
  }

  const totalPrice = cartItems.reduce((val, item) => val + item.price * item.quantity, 0);
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div id="cart">
      {!cartItems.length && <p>No items in cart!</p>}

      {cartItems.length > 0 && <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>
      }
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
