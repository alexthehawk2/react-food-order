import { useState } from "react";
import Button from "../../../Utilities/Button";
import styles from "./CardElement.module.css";
const CardElements = (props) => {
  const [amountInput, setAmountInput] = useState("");
  const amountChangeHandler = (event) => {
    if (parseInt(event.target.value) <= 0) {
      setAmountInput("");
      return;
    }
    setAmountInput(event.target.value);
  };

  const isNewOrderItem = (orderId, cartItems) => {
    let result = true;
    cartItems.forEach((cartItem) => {
      if (cartItem.id === orderId) {
        result = false;
      }
    });
    return result;
  };
  const addHandler = () => {
    setAmountInput("");
    if (props.cart.cartItems.length === 0) {
      const cartItemObj = {
        id: props.orderItemId,
        cartItemName: props.orderTitle,
        cartItemQuantity: parseInt(amountInput),
        cartItemPrice: props.orderPrice,
        currentItemTotal: parseInt(amountInput) * props.orderPrice,
      };
      props.setCart((prevCart) => {
        const updatedCart = {
          ...prevCart,
        };
        updatedCart.cartItems.push(cartItemObj);
        return updatedCart;
      });
    } else if (isNewOrderItem(props.orderItemId, props.cart.cartItems)) {
      props.setCart((prevCart) => {
        const cartItemObj = {
          id: props.orderItemId,
          cartItemName: props.orderTitle,
          cartItemQuantity: parseInt(amountInput),
          cartItemPrice: props.orderPrice,
          currentItemTotal: parseInt(amountInput) * props.orderPrice,
        };
        const updatedCart = {
          ...prevCart,
        };

        updatedCart.cartItems.push(cartItemObj);
        return updatedCart;
      });
    } else if (!isNewOrderItem(props.orderItemId, props.cart.cartItems)) {
      props.setCart((prevCart) => {
        const updatedCart = { ...prevCart };
        updatedCart.cartItems = prevCart.cartItems.map((cartItem) => {
          return cartItem.id === props.orderItemId
            ? {
                ...cartItem,
                cartItemQuantity:
                  cartItem.cartItemQuantity + parseInt(amountInput),
                currentItemTotal:
                  (cartItem.cartItemQuantity + parseInt(amountInput)) *
                  cartItem.cartItemPrice,
              }
            : cartItem;
        });
        return updatedCart;
      });
    }
  };
  return (
    <div className={styles.item_container}>
      <div className={styles.left_div}>
        <h3 className={styles.order_title}>{props.orderTitle}</h3>
        <p className={styles.order_description}>
          <em>{props.orderDescription}</em>
        </p>
        <h3 className={styles.order_price}>${props.orderPrice}</h3>
      </div>
      <div className={styles.right_div}>
        <div className={styles.right_sub_div}>
          <label className={styles.order_amount}>Amount</label>
          <input
            placeholder="qty"
            min={1}
            value={amountInput}
            onChange={amountChangeHandler}
            type="number"
            className={styles.order_input}
          />
        </div>
        <Button addHandler={addHandler} amountInput={amountInput} />
      </div>
    </div>
  );
};
export default CardElements;
