//react
import { useContext, useState } from "react";

//styles
import styles from "../../styles/Calendar.module.css";
import ButtonStyles from "../../styles/Buttons.module.css";

//context
import { UserContext } from "../context/UserContext";

//components
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Schedule({ myMovie, onSchedule }) {
  const [date, setDate] = useState(new Date());
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
    <div>
      <Calendar onChange={setDate} value={date} className={styles.myCalendar} />
      <div className={ButtonStyles.actionButtons}>
        <button onClick={scheduleClick} className={styles.btn}>
          Schedule the selected day 🍿
        </button>
      </div>
    </div>
  );
}
