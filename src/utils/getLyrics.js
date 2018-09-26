import { accessToken } from "../../accessToken";

const checkResponse = response => {
  if (response.status!== 200) {
    console.log(`Request error! Error: ${response.status}`)
    return
  } 
  return response.json()
}

export const getLyrics = (trackID) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=json&track_id=${trackID}&apikey=${accessToken}`)
  .then(checkResponse)
  .then(response => {
    console.log(response.message.body.lyrics.lyrics_body)
    return response})
  .catch(err => {
    throw new Error(`fetch get user data failed: ${err}`)
  })
}