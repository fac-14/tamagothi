const lyricsObj = [
  [85839311, 153938197, 114306264],
  [35711227, 80738541, 35711227],
  [34232589, 85216378, 3711106]
];

const getArtistLyrics = name => {
  if (name === "leto") {
    return lyricsObj[0];
  } else if (name === "avril") {
    return lyricsObj[1];
  } else if (name === "gerard") {
    return lyricsObj[2];
  }
};

export default getArtistLyrics;
