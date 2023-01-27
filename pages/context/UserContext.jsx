import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  const [myMovies, setMyMovies] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        myMovies,
        setMyMovies,
        schedule,
        setSchedule,
        showCalendar,
        setShowCalendar,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
