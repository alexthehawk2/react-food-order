import Button from "../Utilities/CartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  const modalHandler = () => {
    props.setCartModal(!props.cartModal);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>React Meals</h1>
      <Button modalHandler={modalHandler} cartItems={props.cartItems} />
    </header>
  );
};
export default Header;
