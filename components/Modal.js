//react
import ReactDOM from "react-dom";

//styles
import styles from "styles/Modal.module.css";
import buttonStyles from "styles/Buttons.module.css";

function Modal({ children, onClose }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div className={buttonStyles.actionButtons}>
          <button onClick={onClose}>❌</button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function ModalPortal({ children = null, onClose = null }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal")
  );
}
