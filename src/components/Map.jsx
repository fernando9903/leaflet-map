import React, { Component } from "react";
import L from "leaflet";

import { Map, TileLayer, Marker, Popup, Polyline } from "react-leaflet";

export default class MapExample extends Component {
  
  render() {
    //sacamos coords para definir de que a punto a que punto esta el mapa
    //nomas pa q el usuario no se salga del mapa
    var corner1 = L.latLng(-85.05112878, 180.0)
    var corner2 = L.latLng(85.05112878, -179.999995508)
    var bounds = L.latLngBounds(corner1, corner2)
    return (
      <Map
        center={[0,0]}
        zoom={6}
        minZoom={3} //tampoco quiero que se vayan tan lejos alv o se ve culero u.u
        maxZoom={6} //nomas lo exporte con 6 niveles de zooms pal github y tmb pq tarda un putero de 8 para arriba
        // maxBoundsViscosity={true} // false = hace un efecto de rebote al querer ver fuera del mapa, true = lo opuesto lol
        maxBounds={bounds}
      >

        <TileLayer
          url="./prueba-good/{z}/{x}/{y}.png" //era muy simple pero igual me quiero pegar un tiro pq tarde 1000 años en encontrar q la solucion era bn simple
          id="tiff-chunk-rendersss"
          noWrap="true"
          tms="true" //esto va de ahuevo pq exporte en 'otro' formato el mapa??
        />

      </Map>
    );
  }

}
