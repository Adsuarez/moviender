import { useContext } from "react";
import { UserContext } from "context/UserContext";

export default function useSchedule() {
  const { schedule } = useContext(UserContext);

  const getScheduleOfMovie = (id) => {
    let date = "";

    const isScheduled = schedule.find((scheduleObject) => {
      if (scheduleObject.id === id) {
        date = scheduleObject.date;
        return true;
      }
    });

    return { isScheduled, date };
  };

  return { getScheduleOfMovie };
}
