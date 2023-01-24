import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ScheduleAppointment from "./ScheduleAppointment";
import styles from '../../styles/Calendar.module.css'

export default function Schedule({myMovie}) {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <Calendar onChange={onChange} value={value} className={styles.calendar}/>
      <ScheduleAppointment date={value} myMovie={myMovie}/>
    </div>
  );
}
