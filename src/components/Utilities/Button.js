import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={styles.Button} onClick={props.addHandler}>
      +Add
    </button>
  );
};

export default Button;
