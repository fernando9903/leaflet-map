import React, { Component } from "react";
import { Map, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
import Control from 'react-leaflet-control';
import mapData from '../data/countries.json';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import PaneInfoRenderer from "./PaneInfoRenderer.jsx"

const { BaseLayer } = LayersControl
export default class MapRenderer extends Component {

  selectedCountry = undefined;

  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    // layer.bindPopup(ReactDOMServer.renderToString(<ChartTest/>));
    layer.bindPopup("*insert chart here*");
    layer.on({
      click: this.clickChangeStyle,
    });
    layer.on({
      mouseover: this.hoverChangeStyle,
    });
    layer.on({
      mouseout: this.unHoverChangeStyle
    });
  }

  clickChangeStyle = (event) => {
    if (this.selectedCountry !== undefined) {
      this.selectedCountry.setStyle(this.unselectedStyle());
    }
    event.target.setStyle(this.selectedStyle());
    this.selectedCountry = event.target;
  }

  hoverChangeStyle = (event) => {
    if (this.selectedCountry !== undefined && this.selectedCountry === event.target) { return; }
    event.target.setStyle(this.hoveredStyle());
  }

  unHoverChangeStyle = (event) => {
    if (this.selectedCountry !== undefined && this.selectedCountry === event.target) { return; }
    event.target.setStyle(this.unselectedStyle());
  }

  render() {
    var corner1 = L.latLng(-85.05112878, 180.0)
    var corner2 = L.latLng(85.05112878, -179.999995508)
    var bounds = L.latLngBounds(corner1, corner2)
    return (
      <Map
        center={[0, 0]}
        zoom={3}
        minZoom={3}
        maxZoom={10}
        maxBounds={bounds}
        maxBoundsViscosity={true}
      >

        <LayersControl position="topleft">
          <BaseLayer checked name="Land cover in 2010 from ESA CCI">
            <TileLayer
              attribution='&amp;copy (ESACCI-LC-L4-LCCS-Map-300m-P1Y-2010-v2.0.7), Country names tiles by <a href="http://stamen.com">Stamen Design</a>'
              id="esacci-2010-mercator-tiles"
              tms="true"
              noWrap="true"
            />
          </BaseLayer>
          <BaseLayer checked name="Land cover in 2015 from ESA CCI">
            <TileLayer
              url="http://158.69.121.180/fablemap-testing/tifs/esacci_2015/{z}/{x}/{y}.png"
              attribution='&amp;copy (ESACCI-LC-L4-LCCS-Map-300m-P1Y-2015-v2.0.7), Country names tiles by <a href="http://stamen.com">Stamen Design</a>'
              id="esacci-2015-mercator-tiles"
              tms="true"
              noWrap="true"
            />
          </BaseLayer>

          <LayersControl.Overlay name="Show countries names" checked="true">
            <TileLayer
              url="http://tile.stamen.com/toner-labels/{z}/{x}/{y}.png"
              id="city-names"
              noWrap="true"
            />
          </LayersControl.Overlay>
        </LayersControl>

        <GeoJSON
          style={this.unselectedStyle}
          data={mapData.features}
        onEachFeature={this.onEachCountry}
        />
        {/* <Control position="topright" >
          <PaneInfoRenderer/>
        </Control> */}

      </Map >
    );
  }

  unselectedStyle() {
    return {
      fillColor: "white",
      color: 'white',
      fillOpacity: 0,
      weight: 1
    };
  }

  hoveredStyle() {
    return {
      fillColor: "white",
      color: 'white',
      fillOpacity: 0.5,
      weight: 1
    };
  }

  selectedStyle() {
    return {
      fillColor: "white",
      color: 'white',
      fillOpacity: 0.8,
      weight: 1
    };
  }

}
