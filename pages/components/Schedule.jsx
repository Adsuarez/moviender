import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ScheduleAppointment from "./ScheduleAppointment";
import styles from "../../styles/Calendar.module.css";
import ButtonStyles from "../../styles/Buttons.module.css";

export default function Schedule({ myMovie, onSchedule }) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className={styles.myCalendar}
      />
      <div className={ButtonStyles.actionButtons}>
        <ScheduleAppointment
          date={value}
          myMovie={myMovie}
          onSchedule={onSchedule}
        />
      </div>
    </div>
  );
}
