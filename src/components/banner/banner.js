import React from "react";

export default class Banner extends React.Component {
  state = {
    message: "Hug or hurt your Emo :("
  };

  render() {
    return (
      <div id="banner">
        <h2>{this.state.message}</h2>
        <p>
          LEGAL DISCLAIMER: This website in no way condones harming or hugging
          goths and/or emos against their will
        </p>
      </div>
    );
  }
}
