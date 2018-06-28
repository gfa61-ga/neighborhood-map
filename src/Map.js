import React, { Component } from 'react';
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

      const mapConfig = {
        center: initialCenter,
        zoom: zoom,
        clickableIcons: false
      }

      this.map = new this.props.google.maps.Map(document.getElementById('map-area'), mapConfig);
    }
  }

  // If google API has already been loaded, then loadMap
  componentDidMount() {
    this.loadMap();
  }

  // Else wait for the Map to be updated when Google Maps API will be asynchronously loaded and then loadMap
  componentDidUpdate(prepProps, prenState) {
    if (prepProps.google !== this.props.google || prepProps.placeListVisibility !== this.props.placeListVisibility) {
      this.loadMap();
    }
  }

  render() {
    return (
      <div>
        Loading map..
      </div>
    );
  }
}

export default Map;