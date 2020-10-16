import React, { Component } from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import mapData from './../data/countries.json';
import 'leaflet/dist/leaflet.css'; //This style is for the scroll and plus controls of the map
import './MyMap.css';

class MyMap extends Component {
    state = { color: '#ffff00'} ;

    colors = ['green', 'grey', 'white', 'blue', 'yellow', 'orange'] ;

    componentDidMount () {
        console.log (mapData);
    }

    //This function is for the style of countries in the GeoJson
    countryStyle = {
        fillColor: '#dddddd', //Color countries
        fillOpacity: 1, //This number is between cero to one. For example 0 0.1 0.2 0.3 .. 0.9 1
        color: 'white', //The border color of the countries 
        weight: 1, //The weight of the countries border
        //dashArray: 5

    };

    printMessageToConsole = (event) => {
        console.log("Este es un mensaje de consola");
    }

    changeTheCountryColor = (event) => {
        //console.log("The mouse is over the country")
        console.log(event)

        event.target.setStyle({
            color: 'grey',
            //fillColor: '#b4b42d' this is the fable color
            fillColor: this.state.color,
            fillOpacity: 1
        });
    }

    onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN; //The name of the countries
        console.log (countryName);

        layer.options.fillOpacity = Math.random(); //This line is for draw diferent opacities with the countries
        //const colorIndex = Math.floor(Math.random() * this.colors.length); //The random color index in the array of the colors
        //layer.options.fillColor = this.colors[colorIndex]; //Change the color with anything color in the array od colors

        layer.bindPopup(countryName); //When i click above the countri display the name of the country. If i need to add more
        //information about the country like for example i only need to concat the string. example countryName + "other information"
        
        //admin the event on the layer with the countries
        layer.on({
            click: this.printMessageToConsole,
            mouseover: this.changeTheCountryColor 
        });
    }

    //This function change the value color of the state 
    //This value comes from input color in the render
    colorChange = (event) => {
        this.setState({color: event.target.value});
    }

    render () {
        return (
            <div>
                <h1>
                    MyMap
                </h1>
                <Map style={{height: '80vh'}} zoom={2} center={[20, 100]}>
                    <GeoJSON style={this.countryStyle} 
                        data={mapData.features}
                        onEachFeature={this.onEachCountry}></GeoJSON>
                </Map>
                <input type = 'color' value = {this.state.color} onChange = {this.colorChange}></input>
            </div>
        );
    } 
}

export default MyMap;