import React from "react";
import Status from "./status";
import Avatar from "./avatar";

export default class Screen extends React.Component {
  render(){
    return (
      <div id="screen">
        <Status />
        <Avatar />
      </div>
    )
  }
}