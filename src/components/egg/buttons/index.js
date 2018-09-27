import React from "react";

export default class Buttons extends React.Component {
  render() {
    return (
      <div id="buttons">
        <button onClick={this.props.hurtMe}>HURT</button>
        <button onClick={this.props.hugMe}>HUG</button>
      </div>
    );
  }
}
