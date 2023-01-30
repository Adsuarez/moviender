import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Image from "next/image";
import styles from "../../styles/LoginInfo.module.css";
import Link from 'next/link'

export default function LoginInfo() {
  const {user, setUser } = useContext(UserContext);

  return (
    <Link href="/login" className={styles.profile}>
      <p>{!user ? "No user" : user.name}</p>
      <Image
        width={50}
        height={50}
        alt="Profile"
        src={!user ? "https://avatars.dicebear.com/api/avataaars/user1.svg" : "https://avatars.dicebear.com/api/avataaars/user0.svg"}
      />
    </Link>
  );
}
