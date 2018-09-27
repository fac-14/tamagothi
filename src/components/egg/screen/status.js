import React from "react";

export default class Status extends React.Component {
  render() {
    const { health, level } = this.props;
    return (
      <div id="status">
        <progress min="0" max="100" value={health} />
        <h3>Health: {health} / 100</h3>
        <h3>Level: {level}</h3>
      </div>
    );
  }
}
