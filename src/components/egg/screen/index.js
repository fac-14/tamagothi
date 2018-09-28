import React from "react";
import Status from "./status";
import Avatar from "./avatar";
import Loading from "./loading";
import Completed from "./completed";

export default class Screen extends React.Component {
  render() {
    if (this.props.name === null) {
      return (
        <div id="screen">
          <Loading setFighter={this.props.setFighter} />
        </div>
      );
    } else if (this.props.level >= 4) {
      return (
        <div id="screen">
          <Completed />
        </div>
      );
    } else {
      return (
        <div id="screen">
          <Status health={this.props.health} level={this.props.level} />
          {!this.props.lyricHidden && <p>{this.props.randomLyric}</p>}
          {this.props.lyricHidden && (
            <Avatar avatarObj={this.props.avatarObj} />
          )}
        </div>
      );
    }
  }
}
