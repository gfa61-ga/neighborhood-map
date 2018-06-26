import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class Map extends Component {
  static propTypes = {
    google: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    initialCenter: PropTypes.object.isRequired
  }

  loadMap() {
    // If google maps API is available
    if (this.props && this.props.google) {
      let {initialCenter, zoom} = this.props;

      // 'mapRef' is the React component, with 'map' ref, created in render below.
      const mapRef = this.refs.map;
      // Find the 'mapRef' in React DOM and store the corresponding DOM element in 'node'
      const node = ReactDOM.findDOMNode(mapRef);

      const mapConfig = {
        center: initialCenter,
        zoom: zoom,
        clickableIcons: false
      }

      // Sets node's dimentions equal to 'map-area' div's dimentions
      node.style.width = node.parentNode.parentNode.clientWidth + 'px';
      node.style.height = node.parentNode.parentNode.clientHeight + 'px';
      this.map = new this.props.google.maps.Map(node, mapConfig);
    }
  }

  // If google API has already been loaded, then loadMap
  componentDidMount() {
    this.loadMap();
  }

  // Else wait for the Map to be updated when Google Maps API will be asynchronously loaded and then loadMap
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