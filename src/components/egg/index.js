import React from "react";
import Buttons from "./buttons/index";
import Screen from "./screen/index";
import decreaseHealth from "../../utils/decreaseHealth";
import increaseHealth from "../../utils/increaseHealth";
import { getLyrics } from "../../utils/getLyrics";
import pickRandomLyric from "../../utils/pickRandomLyric"

export default class Egg extends React.Component {
  state = {
    health: 69,
    lyrics: null,
    randomLyric: null,
    lyricHidden: true
  };

  hurtMe = event => {
    event.preventDefault();
    this.setState({ health: decreaseHealth(this.state.health) });
    const trackNumber = pickRandomLyric();
    this.setState({ randomLyric: this.state.lyrics[trackNumber]});
  };

  hugMe = event => {
    event.preventDefault();
    this.setState({ health: increaseHealth(this.state.health) });
    pickRandomLyric();
    const trackNumber = pickRandomLyric();
    this.setState({ randomLyric: this.state.lyrics[trackNumber]});
  };

  componentDidMount() {
    const trackIDone = 85839311;
    const trackIDtwo = 153938197;
    const trackIDthree = 114306264;
    const trackOne = getLyrics(trackIDone);
    const trackTwo = getLyrics(trackIDtwo);
    const trackThree = getLyrics(trackIDthree);
    Promise.all([trackOne, trackTwo, trackThree])
    .then(tracks => {
      this.setState({lyrics: tracks})
    })
  }

  render() {
    return (
      <div id="egg">
        <Screen health={this.state.health} lyrics={this.state.lyrics} randomLyric={this.state.randomLyric} lyricHidden={this.state.lyricHidden} />
        <Buttons hurtMe={this.hurtMe} hugMe={this.hugMe} />
      </div>
    );
  }
}