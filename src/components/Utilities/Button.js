import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <button
      className={styles.Button}
      onClick={props.amountInput.length ? props.addHandler : undefined}
    >
      +Add
    </button>
  );
};

export default Button;
