const checkAvatar = (level, avatarObj, name) => {
  const index = level - 1;
  if (name === "leto") {
    return avatarObj[0][index];
  } else if (name === "avril") {
    return avatarObj[1][index];
  } else if (name === "gerard") {
    return avatarObj[2][index];
  }
};

export default checkAvatar;
