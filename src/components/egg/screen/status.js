import React from "react";
import decreaseHealth from "../../../utils/decreaseHealth";
import increaseHealth from "../../../utils/increaseHealth";

export default class Status extends React.Component {

  state = {
    health: 69
  }

  hurtMe = event => {
    event.preventDefault();
    this.setState({ health: decreaseHealth(this.state.health) });
  }

  hugMe = event => {
    event.preventDefault();
    this.setState({ health: increaseHealth(this.state.health) });
  }

  render(){
    const { health } = this.state;
    return (
      <div id="status">
        <progress min="0" max="100" value={health}></progress>
        <button onClick={this.hurtMe}>HURT ME :(</button>
        <button onClick={this.hugMe}>HUG ME?? :/</button>
      </div>
    )
  }
}
