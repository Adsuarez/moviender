//react
import { useContext } from "react";

//next
import Link from "next/link";
import Image from "next/image";

//context
import { UserContext } from "context/UserContext";

export default function LoginInfo() {
  const { user } = useContext(UserContext);

  return (
    <Link href="/login">
      <Image
        width={40}
        height={40}
        alt="profile"
        src={
          !user
            ? "https://avatars.dicebear.com/api/avataaars/user1.svg"
            : "https://avatars.dicebear.com/api/avataaars/user0.svg"
        }
      />
    </Link>
  );
}
