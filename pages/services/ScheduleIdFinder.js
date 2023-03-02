export default function ScheduleIdFinder(id, schedule) {
  let date = "";

  const isScheduled = schedule.find((scheduleObject) => {
    if (scheduleObject.id === id) {
      date = scheduleObject.date;
      return true;
    }
  });

  return { isScheduled, date };
}
