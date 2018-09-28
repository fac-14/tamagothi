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
    console.log("artist lyrics ", artistLyrics);
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
    console.log("lyrics ", this.state.lyrics);
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
    console.log("lyrics ", this.state.lyrics);
<<<<<<< HEAD
    const newStats = increaseHealth(this.state.health, this.state.level);
=======
    const newStats = increaseHealth(
      this.state.health,
      this.state.level,
      avatarObj,
      this.state.name
    );
    const newAvatar = checkAvatar(this.state.level, avatarObj, this.state.name);
>>>>>>> master
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

<<<<<<< HEAD
=======
  restart = event => {
    location.reload();
  };

  // componentDidMount() {
  //   const trackIDone = 85839311;
  //   const trackIDtwo = 153938197;
  //   const trackIDthree = 114306264;
  //   const trackOne = getLyrics(trackIDone);
  //   const trackTwo = getLyrics(trackIDtwo);
  //   const trackThree = getLyrics(trackIDthree);
  //   Promise.all([trackOne, trackTwo, trackThree]).then(tracks => {
  //     this.setState({ lyrics: tracks });
  //   });
  // }

>>>>>>> master
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
