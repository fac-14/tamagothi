import React from "react";

export default class Banner extends React.Component {
  state = {
    message: "Hug or hurt your Emo :("
  };

  render() {
    return (
      <div id="banner">
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}
