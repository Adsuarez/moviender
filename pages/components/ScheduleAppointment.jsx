import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import styles from "../../styles/Calendar.module.css";

export default function ScheduleAppointment({ date, myMovie, onSchedule }) {
  const { schedule, setSchedule } = useContext(UserContext);

  const scheduleClick = () => {
    const id = myMovie.id;
    const title = myMovie.title;

    onSchedule && onSchedule();

    if (schedule.length === 0)
      return setSchedule([
        {
          date,
          id,
          title,
        },
      ]);

    return setSchedule([
      ...schedule,
      {
        date,
        id,
        title,
      },
    ]);
  };

  return (
    <>
      <button onClick={scheduleClick} className={styles.btn}>
        Schedule the selected day 🍿
      </button>
    </>
  );
}
