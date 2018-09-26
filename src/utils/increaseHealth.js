const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const increaseHealth = (health) => {
  return (health + getRandomInt(20));
}

export default increaseHealth;