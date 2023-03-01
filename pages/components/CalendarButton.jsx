//styles
import styles from "../../styles/Buttons.module.css";

//hooks
import useModal from "../hooks/useModal.js";

//components
import Schedule from "./Schedule";
import Modal from "./Modal.js";

export default function CalendarButton({ myMovie }) {
  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <div className={styles.actionButtons}>
        <button onClick={openModal}>Show 📆</button>
      </div>
      {modal && (
        <Modal onClose={closeModal}>
          <Schedule myMovie={myMovie} onSchedule={closeModal} />
        </Modal>
      )}
    </>
  );
}
