import { useState } from "react";
import Schedule from "./Schedule";
import styles from "../../styles/Buttons.module.css";

function CalendarButton({ myMovie }) {
  const [active, setActive] = useState(true);
  const visibleCLick = () => {
    setActive(!active);
  };

  return (
    <section>
      {!active ? (
        <>
          <div className={styles.actionButtons}>
            <button onClick={visibleCLick}>Show 🗓️</button>
          </div>
          <Schedule myMovie={myMovie} />
        </>
      ) : (
        <div className={styles.actionButtons}>
          <button onClick={visibleCLick}>Show 🗓️</button>
        </div>
      )}
    </section>
  );
}

export default CalendarButton;
