import React from "react";
import happyLeto from "../../../../public/img/happyjared.jpg";
import happyAvril from "../../../../public/img/happyavril.jpg";
import happyGerard from "../../../../public/img/happygerard.jpg";

export default class Completed extends React.Component {
  render() {
    if (this.props.name === "leto") {
      return (
        <div>
          <h2>Congrats!</h2>
          <h2>Jared is no longer emo!</h2>
          <img src={happyLeto} />
        </div>
      );
    } else if (this.props.name === "avril") {
      return (
        <div>
          <h2>Congrats!</h2>
          <h2>Avril is no longer emo!</h2>
          <img src={happyAvril} />
        </div>
      );
    } else if (this.props.name === "gerard") {
      return (
        <div>
          <h2>Congrats!</h2>
          <h2>Gerard is no longer emo!</h2>
          <img src={happyGerard} />
        </div>
      );
    }
  }
}
