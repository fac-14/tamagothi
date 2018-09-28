import React from "react";
import deadLeto from "../../../../public/img/deadleto.jpg";
import deadAvril from "../../../../public/img/deadavril.jpg";
import deadGerard from "../../../../public/img/deadgerard.jpg";

export default class Failed extends React.Component {
  render() {
    if (this.props.name === "leto") {
      return (
        <div>
          <h2>You've killed Jared!!!</h2>
          <img src={deadLeto} />
        </div>
      );
    } else if (this.props.name === "avril") {
      return (
        <div>
          <h2>You've killed Avril!!!</h2>
          <img src={deadAvril} />
        </div>
      );
    } else if (this.props.name === "gerard") {
      return (
        <div>
          <h2>You've killed Gerard!!!</h2>
          <img src={deadGerard} />
        </div>
      );
    }
  }
}
