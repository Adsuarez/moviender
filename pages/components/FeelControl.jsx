export function FeelControl(feeling) {
  const likeButton = "likeButton";
  const desireButton = "desireButton";
  const dislikeButton = "dislikeButton";

  const feel = {
    [likeButton]: "like",
    [desireButton]: "desire",
    [dislikeButton]: "dislike",
  };

  return feel[feeling];
}
