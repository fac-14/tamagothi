// App code to go here
import React from "react";
import Banner from "./banner/banner";
import Egg from "./egg/index";

export default class App extends React.Component {
  render() {
    return (
      <div id="main">
        <div id="title">
          <h1>tamaGOTHi</h1>
        </div>
        <Egg />
        <Banner />
      </div>
    );
  }
}
