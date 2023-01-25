import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ScheduleAppointment from "./ScheduleAppointment";
import styles from "../../styles/Calendar.module.css";

export default function Schedule({ myMovie, visible }) {
  const [value, onChange] = useState(new Date());
  const [active, setActive] = useState(true);
  const visibleCLick = () => {
    setActive(!active);
  };

  if (active) {
    document.body.classList.add("active-calendar");
  } else {
    document.body.classList.remove("active-calendar");
  }

  return (
    <>
      {active ? (
        <div className={styles.div}>
          <button onClick={visibleCLick}>Hide❌</button>
          <Calendar
            onChange={onChange}
            value={value}
            className={styles.myCalendar}
          />
          <ScheduleAppointment date={value} myMovie={myMovie} />
        </div>
      ) : null}
    </>
  );
}
