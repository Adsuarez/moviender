import { useContext, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ScheduleAppointment from "./ScheduleAppointment";
import styles from "../../styles/Calendar.module.css";
import ButtonStyles from "../../styles/Buttons.module.css";
import { UserContext } from "../context/UserContext";

export default function Schedule({ myMovie }) {
  const [value, onChange] = useState(new Date());
  const { showCalendar, setShowCalendar } = useContext(UserContext);
  
  console.log("from schedule", showCalendar)
  
  const visibleCLick = () => {
    setShowCalendar(false);
  };

  return (
    <>
      {showCalendar && (
        <div className={styles.div}>
          <div className={ButtonStyles.actionButtons}>
            <button onClick={visibleCLick} className={styles.btn}>
              Hide❌
            </button>
          </div>
          <Calendar
            onChange={onChange}
            value={value}
            className={styles.myCalendar}
          />
          <div className={ButtonStyles.actionButtons}>
            <ScheduleAppointment date={value} myMovie={myMovie} />
          </div>
        </div>
      )}
    </>
  );
}
