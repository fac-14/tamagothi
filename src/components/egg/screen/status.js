import React from "react";
import decreaseHealth from "../../../utils/decreaseHealth";
import increaseHealth from "../../../utils/increaseHealth";

export default class Status extends React.Component {
  // hurtMe = event => {
  //   event.preventDefault();
  //   this.setState({ health: decreaseHealth(this.props.health) });
  // };

  // hugMe = event => {
  //   event.preventDefault();
  //   this.setState({ health: increaseHealth(this.props.health) });
  // };

  render() {
    const { health } = this.props;
    return (
      <div id="status">
        <progress min="0" max="100" value={health} />
      </div>
    );
  }
}
