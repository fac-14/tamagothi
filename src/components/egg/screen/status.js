import React from "react";

export default class Status extends React.Component {

  render() {
    const { health } = this.props;
    return (
      <div id="status">
        <progress min="0" max="100" value={health} />
      </div>
    );
  }
}
