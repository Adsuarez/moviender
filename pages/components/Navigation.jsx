import Link from "next/link";
import styles from "../../styles/Navigation.module.css";

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
  {
    label: "Login",
    route: "/login",
  },
];


export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
