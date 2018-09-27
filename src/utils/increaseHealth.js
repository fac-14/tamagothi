const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const increaseHealth = (health, level) => {
  if (level <= 3) {
    health = health + getRandomInt(20);
    if (health > 99) {
      const newLevel = level + 1;
      const newHealth = health - 100;
      return [newHealth, newLevel];
    }
    return [health, level];
  } else {
    return [health, level];
  }
};

export default increaseHealth;
