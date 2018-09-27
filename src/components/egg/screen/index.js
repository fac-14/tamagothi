import React from "react";
import Status from "./status";
import Avatar from "./avatar";

export default class Screen extends React.Component {

  render() {
    // if (!this.props.randomLyric) {
    //   return (
    //     <div id="screen">
    //       <Status health={this.props.health} />
    //       <Avatar />
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div id="screen">
    //       <Status health={this.props.health} />
    //       <div id="sadsongs">
    //         {this.props.randomLyric}
    //       </div>
    //     </div>
    //   );
    // }
      return (
        <div id="screen">
          <Status health={this.props.health} />
          {!this.props.lyricHidden && <p>{this.props.randomLyric}</p>}
          {this.props.lyricHidden && <Avatar />}
        </div>
      );
  }
}
