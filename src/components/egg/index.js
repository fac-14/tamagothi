import React from "react";
import Buttons from "./buttons/index";
import Screen from "./screen/index";
import decreaseHealth from "../../utils/decreaseHealth";
import increaseHealth from "../../utils/increaseHealth";
import { getLyrics } from "../../utils/getLyrics";

export default class Egg extends React.Component {
  state = {
    health: 69,
    lyrics: null
  };

  hurtMe = event => {
    event.preventDefault();
    this.setState({ health: decreaseHealth(this.state.health) });
    // const trackID = 85839311;
    // getLyrics(trackID).then(data => this.setState({lyrics: data}));
  };

  hugMe = event => {
    event.preventDefault();
    this.setState({ health: increaseHealth(this.state.health) });
    // const trackID = 85839311;
    // getLyrics(trackID).then(data => this.setState({lyrics: data}));
  };

  componentDidMount() {
    const trackID = 85839311;
    getLyrics(trackID).then(data => {
      this.setState({lyrics: data})
      localStorage.setItem("lyrics", data)
      console.log("local storage is now:" + data)
    });
  }

  render() {
    return (
      <div id="egg">
        <Screen health={this.state.health} lyrics={this.state.lyrics} />
        <Buttons hurtMe={this.hurtMe} hugMe={this.hugMe} />
      </div>
    );
  }
}
