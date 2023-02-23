import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import Link from "next/link";
import styles from "../../styles/Navigation.module.css";
import LoginInfo from "./LoginInfo";

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
    icon: "fa-solid fa-house",
  },
  {
    label: "My movies",
    route: "mymovies",
    access: ACCESS_LEVEL[1],
    icon: "fa-solid fa-box-open",
  },
  {
    label: "Moviendering",
    route: "/moviendering",
    access: ACCESS_LEVEL[1],
    icon: "fa-solid fa-film",
  },
  {
    label: "About",
    route: "/about",
    access: ACCESS_LEVEL[0],
    icon: "fa-solid fa-circle-info",
  },
];

export default function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.navigation}>
      <ul>
        {user
          ? links.map(({ route, icon }) => (
              <li key={route}>
                <Link href={route}>
                  <i className={icon} />
                </Link>
              </li>
            ))
          : links.map(
              ({ route, access, icon }) =>
                access === ACCESS_LEVEL[0] && (
                  <li key={route}>
                    <Link href={route}>
                      <i className={icon} />
                    </Link>
                  </li>
                )
            )}
      </ul>
      <LoginInfo />
    </div>
  );
}
