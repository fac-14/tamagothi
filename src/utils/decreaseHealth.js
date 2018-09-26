const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const decreaseHealth = (health) => {
  return (health - getRandomInt(20));
}

export default decreaseHealth;