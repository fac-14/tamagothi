const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

// const increaseHealth = health => {
//   return health + getRandomInt(20);
// };

const increaseHealth = (health, level) => {
  health = health + getRandomInt(20);
  if (health > 100) {
    const newLevel = level + 1;
    const newHealth = 0;
    return [newHealth, newLevel];
  }
  return [health, level];
};

export default increaseHealth;
