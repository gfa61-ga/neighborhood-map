import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Map extends Component {
  loadMap() {
    const mapRef = this.refs.map; // 'mapRef' is the React component, with 'map' ref, created in render below.
    const node = ReactDOM.findDOMNode(mapRef); // Finds the 'mapRef' in React DOM and stores the corresponding DOM element in 'node'
    const mapConfig = {
      center: {lat: 38.24120531635877, lng: 21.7349910736084},
      zoom: 17
    }

    // Sets node's dimentions equal to 'map-area' div's dimentions
    node.style.width = node.parentNode.parentNode.clientWidth + 'px';
    node.style.height = node.parentNode.parentNode.clientHeight + 'px';
    this.map = new this.props.google.maps.Map(node, mapConfig);
  }

  // If google API has already been loaded, then loadMap
  componentDidMount() {
    this.loadMap();
  }

  // Else wait for the Map to be updated, when Google Maps API will be asynchronously loaded and then loadMap
  componentDidUpdate(prepProps, prenState) {
    if (prepProps.google !== this.props.google) {
      this.loadMap();
    }
  }

  render() {
    return (
      <div
        ref="map"
      >
        Loading map..
      </div>
    );
  }
}

export default Map;