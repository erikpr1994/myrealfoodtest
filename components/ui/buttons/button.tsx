import Styles from "./buttons.module.css";

export default function Button({ children, onClick }) {
  return (
    <button className={Styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
