import React from "react";
import jaredleto from "../../../public/img/jaredleto.jpeg";

export default class Egg extends React.Component {
  render() {
    return (
      <div id="egg">
        <div id="screen">
          <h3>Screen to go here</h3>
          <img src={jaredleto} />
        </div>
        <div id="buttons">
          <h3>Buttons to go here</h3>
        </div>
      </div>
    );
  }
}
