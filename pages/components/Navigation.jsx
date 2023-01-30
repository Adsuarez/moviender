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
  },
  {
    label: "My movies",
    route: "mymovies",
    access: ACCESS_LEVEL[1],
  },
  {
    label: "Moviendering",
    route: "/moviendering",
    access: ACCESS_LEVEL[1],
  },
  {
    label: "About",
    route: "/about",
    access: ACCESS_LEVEL[0],
  },
];

export default function Navigation() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.navigation}>
      <ul>
        {user
          ? links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))
          : links.map(({ label, route, access }) =>
              access === "all" ? (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ) : null
            )}
      </ul>
      <LoginInfo />
    </div>
  );
}

/* 
<ul>
        {links.map(({ label, route, access }) =>
          access === "all" ? (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ) : access === "logged" ? (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ) : null
        )}
      </ul>
*/
