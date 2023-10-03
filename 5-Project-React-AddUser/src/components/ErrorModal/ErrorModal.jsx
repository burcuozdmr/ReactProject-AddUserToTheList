import Button from "../Button/Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>Invalid Input</h2>
        </header>
        <div className={classes.content}>
          <p>Please enter a valid name and age(non-empty values)</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </div>
    </div>
  );
}
export default ErrorModal;
