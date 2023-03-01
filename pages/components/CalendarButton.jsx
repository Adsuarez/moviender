import Schedule from "./Schedule";
import styles from "../../styles/Buttons.module.css";
import ModalCalendar from "./ModalCalendar";
import useModal from "../hooks/useModal.js";

export default function CalendarButton({ myMovie }) {
  const { modal, openModal, closeModal } = useModal();

  return (
    <>
      <div className={styles.actionButtons}>
        <button onClick={openModal}>Show 📆</button>
      </div>
      {modal && (
        <ModalCalendar onClose={closeModal}>
          <Schedule myMovie={myMovie} onSchedule={closeModal} />
        </ModalCalendar>
      )}
    </>
  );
}
