import React from "react";
import Buttons from "./buttons/index"
import Screen from "./screen/index"

export default class Egg extends React.Component {
  render() {
    return (
      <div id="egg">
        <Screen />
        <Buttons />
      </div>
    );
  }
}
