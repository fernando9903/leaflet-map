import React, { Component } from "react";
import { withLeaflet, MapLayer } from "react-leaflet";
import L from "leaflet";


import "leaflet-geotiff-2"
import "leaflet-geotiff-2/dist/leaflet-geotiff-rgb";
import "leaflet-geotiff-2/dist/leaflet-geotiff-vector-arrows";
import "leaflet-geotiff-2/dist/leaflet-geotiff-plotty";

class GeotiffLayer extends MapLayer {
  createLeafletElement(props) {
    const { url, options } = props;
    return L.leafletGeotiff(url, options);
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    this.leafletElement.addTo(map);
  }
}

export const RGBGeotiffLayer = withLeaflet(props => {
  const { options, layerRef } = props;
  options.renderer = new L.LeafletGeotiff.rgb(options);
  return <GeotiffLayer ref={layerRef} {...props} />;
});

export const PlottyGeotiffLayer = withLeaflet(props => {
  const { options, layerRef } = props;
  options.renderer = new L.LeafletGeotiff.Plotty(options);
  return <GeotiffLayer ref={layerRef} {...props} />;
});

export const VectorArrowsGeotiffLayer = withLeaflet(props => {
  const { options, layerRef } = props;
  options.renderer = new L.LeafletGeotiff.VectorArrows(options);
  return <GeotiffLayer ref={layerRef} {...props} />;
});
