import CardElement from "./CardElement";
import styles from "./OrderCard.module.css";

const OrderCard = (props) => {
  const orderItems = props.orderItems.map((item) => {
    return (
      <CardElement
        key={item.id}
        orderItemId={item.id}
        orderTitle={item.orderTitle}
        orderDescription={item.orderDescription}
        orderPrice={item.orderPrice}
        setCart={props.setCart}
        cart={props.cart}
      />
    );
  });
  return <div className={styles.order_card}>{orderItems}</div>;
};

export default OrderCard;
