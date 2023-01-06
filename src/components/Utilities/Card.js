import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card_container}>
      <h2 className={styles.card_title}>Delicious Food, Delivered To You</h2>
      <p className={styles.card_description}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={styles.card_description}>
        All our meals are cooked with high-quality ingredients just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};
export default Card;
