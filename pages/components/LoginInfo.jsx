import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Image from "next/image";
import Link from 'next/link'

export default function LoginInfo() {
  const {user, setUser } = useContext(UserContext);

  return (
    <Link href="/login">
      <Image
        width={40}
        height={40}
        alt="profile"
        src={!user ? "https://avatars.dicebear.com/api/avataaars/user1.svg" : "https://avatars.dicebear.com/api/avataaars/user0.svg"}
      />
    </Link>
  );
}
