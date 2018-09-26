import React from "react";
import { render } from "react-dom";
import jaredleto from "../public/img/jaredleto.jpeg";

const App = () => (
  <div>
    <h1>
      TAMA
      <em>GOTH</em>I
    </h1>
    <img src={jaredleto} />
  </div>
);

render(<App />, document.getElementById("root"));
