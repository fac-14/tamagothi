import React from "react";

export default class Banner extends React.Component {
  state = {
    message: "Hug or poke your Emo :("
  };

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
