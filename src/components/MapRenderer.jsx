import React, { Component } from "react";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import mapData from '../data/countries.json';
import { Map, TileLayer, GeoJSON, LayersControl } from "react-leaflet";
const { BaseLayer, FeatureGroup } = LayersControl

export default class MapRenderer extends Component {

  selectedCountry = undefined;

  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup("<h1>" + countryName + "</h1><h3>*informacion* 😳</h3>");
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
        zoom={6}
        minZoom={3}
        maxZoom={6}
        maxBounds={bounds}
        maxBoundsViscosity={true}
      >

        <LayersControl position="topleft">
          <BaseLayer checked name="ESACCI 2015 Mercator">
            <TileLayer
              url="http://158.69.121.180/fablemap-testing/tifs/ESACCI_2015_mercator/{z}/{x}/{y}.png"
              attribution='&amp;copy (Map source), Country names Tiles by <a href="http://stamen.com">Stamen Design</a>'
              id="esacci-mercator-tiles"
              tms="true"
              noWrap="true"
            />

          </BaseLayer>
          <BaseLayer name="OpenStreetMap [TESTING despues se remueve]">
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
