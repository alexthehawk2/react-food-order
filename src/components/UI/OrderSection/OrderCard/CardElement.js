import { useState } from "react";
import Button from "../../../Utilities/Button";
import styles from "./CardElement.module.css";
const CardElements = (props) => {
  const [amountInput, setAmountInput] = useState("");
  const amountChangeHandler = (event) => {
    if (event.target.value === "0") {
      setAmountInput("");
      return;
    }
    setAmountInput(event.target.value);
  };
  const addHandler = () => {
    if (props.cart.cartItems.length === 0) {
      const cartItemObj = {
        id: props.orderItemId,
        cartItemName: props.orderTitle,
        cartItemQuantity: amountInput,
        cartItemPrice: props.orderPrice,
        currentItemTotal: amountInput * props.orderPrice,
      };
      props.setCart({
        ...props.cart,
        cartItems: [cartItemObj],
      });
      //   const updatedCart = {
      //     ...prevCart,
      //     cartItems: [cartItemObj],
      //   };
    }
    console.log(props.cart);
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
