//styles
import styles from "../../styles/Buttons.module.css";

//hooks
import useModal from "hooks/useModal.js";

//components
import Schedule from "./Schedule";
import ModalPortal from "./Modal.js";

export default function CalendarButton({ myMovie }) {
  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <div className={styles.actionButtons}>
        <button onClick={openModal}>Show 📆</button>
      </div>
      {modal && (
        <ModalPortal onClose={closeModal}>
          <Schedule myMovie={myMovie} closeModal={closeModal} />
        </ModalPortal>
      )}
    </>
  );
}
