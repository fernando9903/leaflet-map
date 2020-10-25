import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { PlottyGeotiffLayer, RGBGeotiffLayer, VectorArrowsGeotiffLayer } from "./GeotiffLayer.jsx";
import L from "leaflet";

export default class MapExample extends Component {
  constructor(props) {
    super(props);
    this.tiffRef = React.createRef();
    this.windSpeedRef = React.createRef();
    // this.windDirectionRef = React.createRef();
  }

  render() {
    //Cambiar SRC a Default al momento de exportar
    // const tiffUrl = "tiffs/MEXICO-maxres.tif"; //laggy as shit, tarda 24s en cargar
    // const tiffUrl = "tiffs/MEXICO-divSABE-success.tif"; //mexico pero con menor resolucion
    const tiffUrl = "tiffs/ESACCI-2015-Mercator-Test-DIV30-success.tif"; //otro test 
    const tiffOptions = {
      rBand: 0,
      gBand: 1,
      bBand: 2,
      alphaBand: 0,
      transpValue: 0
    };

    //Ya le agarre cariño a este, no borrar 😳
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

    // const windDirectionUrl = "https://stuartmatthews.github.io/leaflet-geotiff/tif/wind_direction.tif";
    // const windDirectionOptions = {
    //   band: 0,
    //   name: "Wind direction",
    //   arrowSize: 40
    // };

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

            <RGBGeotiffLayer
              layerRef={this.tiffRef}
              url={tiffUrl}
              options={tiffOptions}
            />

            <PlottyGeotiffLayer
              layerRef={this.windSpeedRef}
              url={windSpeedUrl}
              options={windSpeedOptions}
            />


          </Map>
        </div>
      </div>
    );
  }
}
