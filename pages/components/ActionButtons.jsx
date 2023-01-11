import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";

export function ActionButtons() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const handleClick = (event) => {
    if (!user) return router.push("/login");

    console.log(`user: ${user.name}`);
  };

  return (
    <>
      <button name="likeButton" onClick={handleClick}>
        Like ❤️
      </button>
      <button name="desireButton" onClick={handleClick}>
        Desire 👀📽️
      </button>
      <button name="dislikeButton" onClick={handleClick}>
        Dislike ❌
      </button>
    </>
  );
}
