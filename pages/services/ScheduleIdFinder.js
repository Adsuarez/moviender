import { useContext } from "react";
import { UserContext } from "context/UserContext";

export default function ScheduleIdFinder(id) {
  const { schedule } = useContext(UserContext);

  let date = "";

  const isScheduled = schedule.find((scheduleObject) => {
    if (scheduleObject.id === id) {
      date = scheduleObject.date;
      return true;
    }
  });

  return { isScheduled, date };
}
