import styles from "../../styles/Calendar.module.css";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ScheduleAppointment({ date, myMovie }) {
  const { schedule, setSchedule } = useContext(UserContext);

  const scheduleClick = () => {
    date.movieId = myMovie.id;
    date.title = myMovie.title;
    
    if (schedule.length === 0) return setSchedule([date]);

    return setSchedule([...schedule, date]);
  };

  return (
    <>
      <button onClick={scheduleClick} className={styles.btn}>Schedule the selected day 🎥✅</button>
    </>
  );
}
