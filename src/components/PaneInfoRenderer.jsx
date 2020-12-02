import React, { Component } from "react";
import ChartTest from './ChartTest.jsx'

export default class PaneInfoRenderer extends Component {

  constructor(props) {
    super(props);
    this.countryCode = props.countryCode;
    this.countryName = props.countryName;
  }

  render() {
    return (
      <div id="pane-info" style={{ height: "72vh", width: "37vw", background:"#ffffff" }}>
        <h3>lol funca</h3>
        <ChartTest/>
      </div>
    );
  }

}
