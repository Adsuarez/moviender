import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ScheduleAppointment from "./ScheduleAppointment";

export default function Schedule() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <ScheduleAppointment date={value}/>
    </div>
  );
}
