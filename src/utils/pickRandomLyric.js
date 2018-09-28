const pickRandomLyric = songArray => {
  const number = Math.floor(Math.random() * songArray.length);
  console.log(number);
  return number;
};

//returns 0, 1, or 2

export default pickRandomLyric;
