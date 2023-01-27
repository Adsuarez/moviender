import { useMemo, useState, useContext } from "react";
import Schedule from "./Schedule";
import styles from "../../styles/Buttons.module.css";
import { UserContext } from "../context/UserContext";

export default function CalendarButton({ myMovie }) {
  const [active, setActive] = useState(true);
  const { schedule, setSchedule } = useContext(UserContext);
  console.log("i need useMemo");

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
