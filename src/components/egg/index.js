import React from "react";
import Buttons from "./buttons/index";
import Screen from "./screen/index";
import decreaseHealth from "../../utils/decreaseHealth";
import increaseHealth from "../../utils/increaseHealth";
import { getLyrics } from "../../utils/getLyrics";
import pickRandomLyric from "../../utils/pickRandomLyric";
import avatarObj from "../../utils/avatar";
import checkAvatar from "../../utils/checkAvatar";

export default class Egg extends React.Component {
  state = {
    health: 69,
    lyrics: null,
    randomLyric: null,
    lyricHidden: true,
    avatarObj: avatarObj[0],
    level: 1,
    dead: false,
    name: null
  };

  toggleLyric = () => {
    console.log("revealed!");
    this.setState({ lyricHidden: false }, () => {
      setTimeout(() => {
        this.setState({ lyricHidden: true });
      }, 3000);
    });
  };

  hurtMe = event => {
    event.preventDefault();
    const newStats = decreaseHealth(this.state.health, this.state.level);
    const newAvatar = checkAvatar(this.state.level, avatarObj);
    this.setState({
      health: newStats[0],
      level: newStats[1],
      avatarObj: newAvatar
    });
    pickRandomLyric();
    const trackNumber = pickRandomLyric();
    this.setState({ randomLyric: this.state.lyrics[trackNumber] });
    this.toggleLyric();
  };

  hugMe = event => {
    event.preventDefault();
    const newStats = increaseHealth(this.state.health, this.state.level);
    const newAvatar = checkAvatar(this.state.level, avatarObj);
    this.setState({
      health: newStats[0],
      level: newStats[1],
      avatarObj: newAvatar
    });
    pickRandomLyric();
    const trackNumber = pickRandomLyric();
    this.setState({ randomLyric: this.state.lyrics[trackNumber] });
    this.toggleLyric();
  };

  componentDidMount() {
    const trackIDone = 85839311;
    const trackIDtwo = 153938197;
    const trackIDthree = 114306264;
    const trackOne = getLyrics(trackIDone);
    const trackTwo = getLyrics(trackIDtwo);
    const trackThree = getLyrics(trackIDthree);
    Promise.all([trackOne, trackTwo, trackThree]).then(tracks => {
      this.setState({ lyrics: tracks });
    });
  }

  render() {
    return (
      <div id="egg">
        <Screen
          health={this.state.health}
          lyrics={this.state.lyrics}
          randomLyric={this.state.randomLyric}
          lyricHidden={this.state.lyricHidden}
          avatarObj={this.state.avatarObj}
          name={this.state.name}
        />
        <Buttons hurtMe={this.hurtMe} hugMe={this.hugMe} />
      </div>
    );
  }
}
