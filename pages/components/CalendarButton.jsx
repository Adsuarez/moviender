import { useState } from "react";
import Schedule from "./Schedule";

function CalendarButton({myMovie}) {
  const [active, setActive] = useState(true);
  const visibleCLick = () => {
    setActive(!active);
  };

  return (
    <>
      {!active ? (
        <div>
          <button onClick={visibleCLick}>Hide ❌</button>
          <Schedule myMovie={myMovie}/>
        </div>
      ) : (
        <button onClick={visibleCLick}>Show 🗓️</button>
      )}
    </>
  );
}

export default CalendarButton;
