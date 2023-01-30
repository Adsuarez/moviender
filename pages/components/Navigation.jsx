import Link from "next/link";
import styles from "../../styles/Navigation.module.css";
import LoginInfo from "./LoginInfo";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "My movies",
    route: "mymovies",
  },
  {
    label: "Moviendering",
    route: "/moviendering",
  },
  {
    label: "About",
    route: "/about",
  },
];

export default function Navigation() {
  return (
      <div className={styles.navigation}>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
        <LoginInfo />
      </div>
  );
}
