const checkAvatar = (level, avatarObj) => {
  console.log("avatar ", avatarObj);
  const index = level - 1;
  return avatarObj[index];
};

export default checkAvatar;
