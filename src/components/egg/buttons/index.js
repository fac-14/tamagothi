import React from "react";

export default class Buttons extends React.Component {
  render() {
    return (
      <div id="buttons">
        <button onClick={this.props.hurtMe}>HURT ME :(</button>
        <button onClick={this.props.hugMe}>HUG ME?? :/</button>
      </div>
    );
  }
}
