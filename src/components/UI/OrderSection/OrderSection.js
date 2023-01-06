import Card from "../../Utilities/Card";
import OrderCard from "./OrderCard/OrderCard";
import styles from "./OrderSection.module.css";

const OrderSection = (props) => {
  return (
    <div className={styles.card_container}>
      <Card />
      <OrderCard
        orderItems={props.orderItems}
        setCart={props.setCart}
        cart={props.cart}
      />
    </div>
  );
};
export default OrderSection;
