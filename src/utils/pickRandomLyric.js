const pickRandomLyric = () => {
  const number = Math.floor(Math.random() * 3);
  console.log(number);
  return number;
}

//returns 0, 1, or 2

export default pickRandomLyric;