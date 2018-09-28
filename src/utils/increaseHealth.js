import checkAvatar from "./checkAvatar";

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const increaseHealth = (health, level, avatarObj, name) => {
  if (level <= 3) {
    health = health + getRandomInt(20);
    if (health > 99) {
      const newLevel = level + 1;
      const newHealth = health - 100;
      checkAvatar(newLevel, avatarObj, name);
      return [newHealth, newLevel];
    }
    return [health, level];
  } else {
    return [health, level];
  }
};

export default increaseHealth;
