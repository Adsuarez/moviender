import styles from "../../styles/Modal.module.css";
import ReactDOM from "react-dom";
import buttonStyles from '../../styles/Buttons.module.css'

function ModalAuth({ children, onClose }) {
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

export default function ModalAuthPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <ModalAuth onClose={onClose}>{children}</ModalAuth>,
    document.getElementById("modalAuth")
  );
}
