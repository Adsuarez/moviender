import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Image from "next/image";
import styles from "./LoginInfo.module.css";

export default function LoginInfo() {
  const {user, setUser } = useContext(UserContext);

  return (
    <div className={styles.profile}>
      <p>{!user ? "Pending to login" : user.name}</p>
      <Image
        width={50}
        height={50}
        alt="Profile"
        src={!user ? "https://avatars.dicebear.com/api/avataaars/user1.svg" : "https://avatars.dicebear.com/api/avataaars/user0.svg"}
      />
    </div>
  );
}
