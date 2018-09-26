import React from "react";
import Buttons from "./buttons/index";
import Screen from "./screen/index";
import decreaseHealth from "../../utils/decreaseHealth";
import increaseHealth from "../../utils/increaseHealth";

export default class Egg extends React.Component {
  state = {
    health: 69
  };

  hurtMe = event => {
    event.preventDefault();
    this.setState({ health: decreaseHealth(this.state.health) });
  };

  hugMe = event => {
    event.preventDefault();
    this.setState({ health: increaseHealth(this.state.health) });
  };

  render() {
    return (
      <div id="egg">
        <Screen health={this.state.health} />
        <Buttons hurtMe={this.hurtMe} hugMe={this.hugMe} />
      </div>
    );
  }
}
