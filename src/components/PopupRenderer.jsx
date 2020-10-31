import React, { Component } from "react";

export default class MapRenderer extends Component {

  constructor(props) {
    super(props);
    this.countryName = props.countryName;
    this.description = props.description;
    this.graph = props.graph;
  }

  render() {
    return (
      <div>
      </div>
    );
  }

}
