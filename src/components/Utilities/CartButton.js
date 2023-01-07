import cartIcon from "../../images/shopping-cart.png";
import styles from "./CartButton.module.css";
const Button = (props) => {
  return (
    <div onClick={props.modalHandler} className={styles.button_container}>
      <div className={styles.cart_button}>
        <img src={cartIcon} alt="shopping-cart" />
        <span className={styles.cart_text}>Your Cart</span>
        <span className={styles.cart_item_text}>{props.cartItemsCount}</span>
      </div>
    </div>
  );
};
export default Button;
