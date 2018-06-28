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

      const myStyles = [{
        featureType: "poi",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }];

      const mapConfig = {
        center: initialCenter,
        zoom: zoom,
        clickableIcons: false,
        styles: myStyles
      }

      this.map = new this.props.google.maps.Map(document.getElementById('map-area'), mapConfig);

      new this.props.google.maps.places.Autocomplete(document.getElementById('location-input'));

      let ref = this;
      document.getElementById('location-button').addEventListener('click', (function() {
        this.getNewLocation(ref);
      }).bind(ref));
    }
  }

  getNewLocation(ref) {
    let geocoder = new this.props.google.maps.Geocoder();
    let address = document.getElementById('location-input').value;
    if (address === '') {
      window.alert('You must enter an area, or address.');
    } else {
      geocoder.geocode(
        { address: address
        }, function(results, status) {
          if (status === 'OK') {
            let newLat = results[0].geometry.location.lat();
            let newLng = results[0].geometry.location.lng();

            ref.props.onChangeNeighborhood(newLat, newLng);
            ref.map.panTo({
              lat: newLat,
              lng: newLng
            });
          } else {
            window.alert('We could not find that location - try entering a more specific place.');
          }
        });
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
      <div>
        Loading map..
      </div>
    );
  }
}

export default Map;