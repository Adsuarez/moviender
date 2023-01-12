import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ScheduleAppointment({ myMovie }) {
  const { schedule, setSchedule } = useContext(UserContext);

  const handleClick = (event) => {
    if (schedule.length === 0) return setSchedule([myMovie]);

    return setSchedule([...schedule, myMovie]);
  };

  return (
    <div>
      <button onClick={handleClick}>👀🎞️ Schedule movie</button>
    </div>
  );
}
