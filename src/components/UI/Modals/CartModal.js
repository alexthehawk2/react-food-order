import CartElement from "./CartElement";
import styles from "./CartModal.module.css";

const CartModal = (props) => {
  const cartModalHandler = () => {
    props.setCartModal(!props.cartModal);
  };
  const CartElements = props.cart.cartItems.map((cartItem) => {
    return (
      <CartElement
        key={cartItem.id}
        cartItemName={cartItem.cartItemName}
        cartItemPrice={cartItem.cartItemPrice}
        cartItemQuantity={cartItem.cartItemQuantity}
      />
    );
  });
  return (
    <div
      className={styles.modal_container}
      style={!props.cartModal ? { display: "none" } : {}}
    >
      <div className={styles.modal_card}>
        {CartElements.length === 0 ? <p>No cart Items</p> : { CartElements }}
        <div className={styles.cart_total_container}>
          <h1 className={styles.cart_total}>Total Amount</h1>
          <h1 className={styles.cart_total}>${props.cart.cartTotal}</h1>
        </div>
        <div className={styles.cart_footer_btns}>
          <button
            onClick={cartModalHandler}
            className={styles.modal_cancel_btn}
          >
            Cancel
          </button>
          <button className={styles.order_btn}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
