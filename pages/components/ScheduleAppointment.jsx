import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import styles from "../../styles/Calendar.module.css";

export default function ScheduleAppointment({ date, myMovie }) {
  const { schedule, setSchedule, setShowCalendar } = useContext(UserContext);

  const scheduleClick = () => {
    date.movieId = myMovie.id;
    date.title = myMovie.title;
    setShowCalendar(false);

    if (schedule.length === 0) return setSchedule([date]);

    return setSchedule([...schedule, date]);
  };

  return (
    <>
      <button onClick={scheduleClick} className={styles.btn}>
        Schedule the selected day 🎥✅
      </button>
    </>
  );
}
