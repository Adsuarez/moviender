export function ActionButtons() {
  const handleClick = (event) => {
    console.log("button active")
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
