import React from "react";

export default class Loading extends React.Component {

  render() {
    return (
      <div id="loading">
        <button onClick={()=>{this.props.setFighter("leto")}}> Leto! </button>
        <button onClick={()=>{this.props.setFighter("avril")}}> Avril! </button>
      </div>
    );
  }
}