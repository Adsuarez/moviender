import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Schedule from "./Schedule";

export default function ScheduleAppointment({ myMovie }) {
  const { schedule, setSchedule } = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    if (schedule.length === 0) return setSchedule([myMovie]);
    setVisible(!visible);
    return setSchedule([...schedule, myMovie]);
  };

  /*const renderCalendar = () => {
    if (visible) {
      return `Hide calendar`;
    } else {
      return `👀🎞️ Schedule movie`;
    }
  };*/

  return (
    <div>
      <button onClick={handleClick}>
        {visible ? `👀🎞️ Schedule movie` : <Schedule />}
      </button>
    </div>
  );
}
