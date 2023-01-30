import { useState } from "react";
import Schedule from "./Schedule";
import styles from "../../styles/Buttons.module.css";
import ModalCalendar from "./ModalCalendar";

export default function CalendarButton({ myMovie }) {
  const [showModal, setShowModal] = useState(false);

  const visibleCLick = () => {
    return setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSchedule = () => {
    setShowModal(false);
  };

  if (showModal) {
    document.body.classList.add("active-calendar");
  } else {
    document.body.classList.remove("active-calendar");
  }

  return (
    <>
      <div className={styles.actionButtons}>
        <button onClick={visibleCLick}>Show 📆</button>
      </div>
      {showModal && (
        <ModalCalendar onClose={handleClose}>
          <Schedule myMovie={myMovie} onSchedule={handleSchedule} />
        </ModalCalendar>
      )}
      {console.log(showModal)}
    </>
  );
}
