//react
import { useContext } from "react";

//next
import Link from "next/link";

//styles
import styles from "styles/Navigation.module.css";

//context
import { UserContext } from "context/UserContext";

//components
import LoginInfo from "./LoginInfo";

//utils
import { HOUSE, BOX, FILM, INFO } from "utils/icons.js";

const ACCESS_LEVEL = {
  0: "all",
  1: "logged",
  2: "admin",
};

const links = [
  {
    label: "Home",
    route: "/",
    access: ACCESS_LEVEL[0],
    icon: HOUSE,
  },
  {
    label: "My movies",
    route: "mymovies",
    access: ACCESS_LEVEL[1],
    icon: BOX,
  },
  {
    label: "Moviendering",
    route: "/moviendering",
    access: ACCESS_LEVEL[1],
    icon: FILM,
  },
  {
    label: "About",
    route: "/about",
    access: ACCESS_LEVEL[0],
    icon: INFO,
  },
];

export default function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.navigation}>
      <ul>
        {user
          ? links.map(({ route, icon, label }) => (
              <li key={route}>
                <Link href={route}>
                  <i className={icon} />
                  <p>{label}</p>
                </Link>
              </li>
            ))
          : links.map(
              ({ route, access, icon, label }) =>
                access === ACCESS_LEVEL[0] && (
                  <li key={route}>
                    <Link href={route}>
                      <i className={icon} />
                      <p>{label}</p>
                    </Link>
                  </li>
                )
            )}
      </ul>
      <LoginInfo />
    </div>
  );
}
