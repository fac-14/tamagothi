import React from "react";

export default class Buttons extends React.Component {
  render() {
    if (this.props.level > 3 || this.props.level < 1) {
      return (
        <div id="buttons">
          <button onClick={this.props.restart}>PLAY AGAIN</button>
        </div>
      );
    }
    return (
      <div id="buttons">
        <button onClick={this.props.hurtMe}>HURT</button>
        <button onClick={this.props.hugMe}>HUG</button>
      </div>
    );
  }
}
