import React from "react";
import happyLeto from "../../../../public/img/happyjared.jpg";
import happyAvril from "../../../../public/img/happyavril.jpg";
import happyGerard from "../../../../public/img/happygerard.jpg";

export default class Completed extends React.Component {
  render() {
    if (this.props.name === "leto") {
      return (
        <div className="win-lose">
          <h3>Congrats!</h3>
          <h3>Jared is no longer emo!</h3>
          <img src={happyLeto} />
        </div>
      );
    } else if (this.props.name === "avril") {
      return (
        <div className="win-lose">
          <h3>Congrats!</h3>
          <h3>Avril is no longer emo!</h3>
          <img src={happyAvril} />
        </div>
      );
    } else if (this.props.name === "gerard") {
      return (
        <div className="win-lose">
          <h3>Congrats!</h3>
          <h3>Gerard is no longer emo!</h3>
          <img src={happyGerard} />
        </div>
      );
    }
  }
}
