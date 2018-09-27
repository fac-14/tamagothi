import React from "react";
// import jaredleto1 from "../../../../public/img/jaredleto1.jpeg";

export default class Avatar extends React.Component {
  render() {
    return (
      <div id="avatar">
        <img src={this.props.avatarObj} />
      </div>
    );
  }
}
