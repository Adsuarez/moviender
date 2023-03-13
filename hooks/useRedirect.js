//react
import { useContext, useEffect } from "react";

//next
import { useRouter } from "next/router";

//context
import { UserContext } from "../context/UserContext";

export default function useRedirect() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  }, [router, user]);
}
