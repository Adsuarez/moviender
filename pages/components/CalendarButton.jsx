import { useState } from "react";
import Schedule from "./Schedule";

function CalendarButton() {
  const [active, setActive] = useState(true);

  const visibleCLick = () => {
    setActive(!active);
  };

  return (
    <>
      {!active ? (
        <div>
          <button onClick={visibleCLick}>Hide ❌</button>
          <Schedule />
        </div>
      ) : (
        <button onClick={visibleCLick}>Show 🗓️</button>
      )}
    </>
  );
}

export default CalendarButton;
