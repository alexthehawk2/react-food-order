import styles from "./CartElement.module.css";

const CartElement = (props) => {
  const toggleQuantityBtnHandler = (operator) => {
    props.setCart((prevCart) => {
      const updatedCart = {
        ...prevCart,
      };
      updatedCart.cartItems = updatedCart.cartItems.map((cartItem) => {
        if (cartItem.id === props.orderItemId) {
          if (operator === "-" && cartItem.cartItemQuantity === 1) {
            return null;
          } else {
            return {
              ...cartItem,
              cartItemQuantity:
                operator === "+"
                  ? cartItem.cartItemQuantity + 1
                  : cartItem.cartItemQuantity - 1,
              currentItemTotal:
                operator === "+"
                  ? (cartItem.cartItemQuantity + 1) * cartItem.cartItemPrice
                  : (cartItem.cartItemQuantity - 1) * cartItem.cartItemPrice,
            };
          }
        }
        return cartItem;
      });
      return updatedCart;
    });
  };
  return (
    <div className={styles.cart_element_container}>
      <div className={styles.cart_element_left_div}>
        <h2 className={styles.cart_item_name}>{props.cartItemName}</h2>
        <div className={styles.cart_element_left_sub_div}>
          <span className={styles.cart_item_price}>${props.cartItemPrice}</span>
          <span className={styles.cart_item_quantity}>
            x {props.cartItemQuantity}
          </span>
        </div>
      </div>
      <div className={styles.cart_element_right_div}>
        <button
          onClick={(event) => toggleQuantityBtnHandler(event.target.innerHTML)}
          className={styles.cart_button}
        >
          -
        </button>
        <button
          onClick={(event) => toggleQuantityBtnHandler(event.target.innerHTML)}
          className={styles.cart_button}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartElement;
