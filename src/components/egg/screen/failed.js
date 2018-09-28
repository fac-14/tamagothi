import React from "react";
import deadLeto from "../../../../public/img/deadleto.jpg";
import deadAvril from "../../../../public/img/deadavril.jpg";
import deadGerard from "../../../../public/img/deadgerard.jpg";

export default class Failed extends React.Component {
  render() {
    if (this.props.name === "leto") {
      return (
        <div className="win-lose">
          <h3>You've killed Jared!!!</h3>
          <img src={deadLeto} />
        </div>
      );
    } else if (this.props.name === "avril") {
      return (
        <div className="win-lose">
          <h3>You've killed Avril!!!</h3>
          <img src={deadAvril} />
        </div>
      );
    } else if (this.props.name === "gerard") {
      return (
        <div className="win-lose">
          <h3>You've killed Gerard!!!</h3>
          <img src={deadGerard} />
        </div>
      );
    }
  }
}
