import { useContext } from "react";
import Schedule from "./Schedule";
import styles from "../../styles/Buttons.module.css";
import { UserContext } from "../context/UserContext";

export default function CalendarButton({ myMovie }) {
  const { showCalendar, setShowCalendar } = useContext(UserContext);

  console.log("from CalendarButton", showCalendar);

  const visibleCLick = () => {
    setShowCalendar(true);
  };

  if (showCalendar) {
    document.body.classList.add("active-calendar");
  } else {
    document.body.classList.remove("active-calendar");
  }

  return (
    <>
      <div className={styles.actionButtons}>
        <button onClick={visibleCLick}>Show 📆</button>
      </div>
      {showCalendar && <Schedule myMovie={myMovie} />}
    </>
  );
}