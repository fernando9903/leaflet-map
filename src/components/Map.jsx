import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { PlottyGeotiffLayer, RGBGeotiffLayer, VectorArrowsGeotiffLayer } from "./GeotiffLayer.jsx";
import L from "leaflet";

export default class MapExample extends Component {
  constructor(props) {
    super(props);
    this.mexicoRef = React.createRef();
    this.windSpeedRef = React.createRef();
    this.windDirectionRef = React.createRef();
  }

  render() {
    const mexicoUrl = "fableMap/data/wind_speed.tif";
    const mexicoOptions = {
      band: 0,
      displayMin: 0,
      displayMax: 30,
      name: "Wind speed",
      colorScale: "rainbow",
      clampLow: false,
      clampHigh: true
    };

    const windSpeedUrl = "fableMap/data/wind_speed.tif";
    const windSpeedOptions = {
      band: 0,
      displayMin: 0,
      displayMax: 30,
      name: "Wind speed",
      colorScale: "rainbow",
      clampLow: false,
      clampHigh: true
    };

    const windDirectionUrl = "https://stuartmatthews.github.io/leaflet-geotiff/tif/wind_direction.tif";
    const windDirectionOptions = {
      band: 0,
      name: "Wind direction",
      arrowSize: 40
    };

    return (
      <div>
        <div>
          <Map
            center={this.props.center}
            zoom={this.props.zoom}
            length={4}
          >
            <TileLayer
              url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
              attribution='<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
              id="mapbox.streets"
            />

            <PlottyGeotiffLayer
              layerRef={this.windSpeedRef}
              url={windSpeedUrl}
              options={windSpeedOptions}
            />
            <VectorArrowsGeotiffLayer
              layerRef={this.windDirectionRef}
              url={windDirectionUrl}
              options={windDirectionOptions}
            />
          </Map>
        </div>
      </div>
    );
  }
}
