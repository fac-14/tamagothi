import React from "react";
import Buttons from "./buttons/index";
import Screen from "./screen/index";
import decreaseHealth from "../../utils/decreaseHealth";
import increaseHealth from "../../utils/increaseHealth";
import { getLyrics } from "../../utils/getLyrics";
import pickRandomLyric from "../../utils/pickRandomLyric";
import avatarObj from "../../utils/avatar";
import checkAvatar from "../../utils/checkAvatar";
import setFighter from "../../utils/setFighter";
import setAvatar from "../../utils/setAvatar";
import getArtistLyrics from "../../utils/lyrics";

export default class Egg extends React.Component {
  state = {
    health: 69,
    lyrics: null,
    randomLyric: null,
    lyricHidden: true,
    avatarObj: avatarObj[0][0],
    level: 1,
    dead: false,
    name: null
  };

  setFighter = event => {
    this.setState({ name: setFighter(event), avatarObj: setAvatar(event) });
    const artistLyrics = getArtistLyrics(event);
    const trackIDone = artistLyrics[0];
    const trackIDtwo = artistLyrics[1];
    const trackIDthree = artistLyrics[2];
    const trackOne = getLyrics(trackIDone);
    const trackTwo = getLyrics(trackIDtwo);
    const trackThree = getLyrics(trackIDthree);
    Promise.all([trackOne, trackTwo, trackThree]).then(tracks => {
      this.setState({ lyrics: tracks });
    });
  };

  toggleLyric = () => {
    console.log("revealed!");
    this.setState({ lyricHidden: false }, () => {
      setTimeout(() => {
        this.setState({ lyricHidden: true });
      }, 1500);
    });
  };

  hurtMe = event => {
    const newStats = decreaseHealth(this.state.health, this.state.level);
    this.setState({
      health: newStats[0],
      level: newStats[1]
    });
    const newAvatar = checkAvatar(this.state.level, avatarObj, this.state.name);
    this.setState({ avatarObj: newAvatar });
    pickRandomLyric();
    const trackNumber = pickRandomLyric();
    const splitLyric = this.state.lyrics[trackNumber].split("?")[0];
    this.setState({ randomLyric: splitLyric });
    this.toggleLyric();
  };

  hugMe = event => {
    const newStats = increaseHealth(this.state.health, this.state.level);
    this.setState({
      health: newStats[0],
      level: newStats[1]
    });
    const newAvatar = checkAvatar(this.state.level, avatarObj, this.state.name);
    this.setState({ avatarObj: newAvatar });
    pickRandomLyric(this.state.lyrics);
    const trackNumber = pickRandomLyric(this.state.lyrics);
    const cleanLyrics = this.state.lyrics[trackNumber].split("******")[0];
    // console.log("cleaned lyrics", cleanLyrics);
    // const splitLyric = this.state.lyrics[trackNumber].split("?");
    const splitLyric = cleanLyrics.split("?");
    const snippetNumber = pickRandomLyric(splitLyric);
    this.setState({ randomLyric: splitLyric[snippetNumber] });
    this.toggleLyric();
  };

  restart = event => {
    location.reload();
  };

  render() {
    if (this.state.name === null) {
      return (
        <div id="egg">
          <div id="egg-drawing">
            <Screen
              health={this.state.health}
              lyrics={this.state.lyrics}
              randomLyric={this.state.randomLyric}
              lyricHidden={this.state.lyricHidden}
              avatarObj={this.state.avatarObj}
              name={this.state.name}
              setFighter={this.setFighter}
            />
            <div id="pickmessage">
              <button id="fakebutton">Pick your emo!</button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="egg">
          <div id="egg-drawing">
            <Screen
              health={this.state.health}
              lyrics={this.state.lyrics}
              randomLyric={this.state.randomLyric}
              lyricHidden={this.state.lyricHidden}
              avatarObj={this.state.avatarObj}
              name={this.state.name}
              setFighter={this.setFighter}
              level={this.state.level}
            />

            <Buttons
              hurtMe={this.hurtMe}
              hugMe={this.hugMe}
              level={this.state.level}
              restart={this.restart}
            />
          </div>
        </div>
      );
    }
  }
}
