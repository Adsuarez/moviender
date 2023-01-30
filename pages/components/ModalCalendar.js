import ReactDOM from "react-dom";

import styles from "../../styles/Modal.module.css";
import buttonStyles from "../../styles/Buttons.module.css";

function ModalCalendar({ children, onClose }) {
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

export default function ModalCalendarPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <ModalCalendar onClose={onClose}>{children}</ModalCalendar>,
    document.getElementById("modalCalendar")
  );
}
