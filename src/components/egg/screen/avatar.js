import React from "react";
import jaredleto from "../../../../public/img/jaredleto.jpeg";

export default class Avatar extends React.Component {
  render(){
    return (
      <div id="avatar">
        <img src={jaredleto} />
      </div>
    )
  }
}
