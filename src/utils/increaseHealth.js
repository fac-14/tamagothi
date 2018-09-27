const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const increaseHealth = (health, level) => {
  health = health + getRandomInt(20);
  if (health > 100) {
    const newLevel = level + 1;
    const newHealth = health - 100;
    return [newHealth, newLevel];
  }
  return [health, level];
};

export default increaseHealth;
