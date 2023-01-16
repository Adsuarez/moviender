import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function ScheduleAppointment({ date }) {
  const { schedule, setSchedule } = useContext(UserContext);

  const scheduleClick = () => {
    if (schedule.length === 0) return setSchedule([date]);

    return setSchedule([...schedule, date]);
  };

  return (
    <>
      <button onClick={scheduleClick}>Schedule the selected date 🎥✅</button>
    </>
  );
}
