import styles from "./CartElement.module.css";

const CartElement = (props) => {
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
        <button className={styles.cart_button}>-</button>
        <button className={styles.cart_button}>+</button>
      </div>
    </div>
  );
};

export default CartElement;
