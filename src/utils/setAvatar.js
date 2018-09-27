import avatarObj from "./avatar";

const setAvatar = name => {
  if (name === "leto") {
    return avatarObj[0][0];
  } else if (name === "avril") {
    return avatarObj[1][0];
  } else if (name === "gerard") {
    return avatarObj[2][0];
  }
};

export default setAvatar;
