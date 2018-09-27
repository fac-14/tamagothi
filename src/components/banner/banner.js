import React from "react";

export default class Banner extends React.Component {
  state = {
    message: "Hug or hurt your Emo :("
  };

  render() {
    return (
      <div id="banner">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
