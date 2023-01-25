import { useState } from "react";
import Schedule from "./Schedule";
import styles from "../../styles/Buttons.module.css";

function CalendarButton({ myMovie }) {
  const [active, setActive] = useState(true);
  const visibleCLick = () => {
    setActive(!active);
  };

  return (
    <section className={styles.actionButtons}>
      {!active ? (
        <>
          <button onClick={visibleCLick}>Show 🗓️</button>
          <Schedule myMovie={myMovie} />
        </>
      ) : (
        <button onClick={visibleCLick}>Show 🗓️</button>
      )}
    </section>
  );
}

export default CalendarButton;
