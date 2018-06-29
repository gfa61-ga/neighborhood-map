import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Map extends Component {
  static propTypes = {
    google: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    initialCenter: PropTypes.object.isRequired
  }

  markers = []

  loadMap() {
    // If google maps API is available
    if (this.props && this.props.google) {
      let {initialCenter, zoom} = this.props;

      // https://snazzymaps.com/style/18/retro
      const myStyles = [
        {
          featureType: 'administrative',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'water',
          stylers: [
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'transit',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'landscape',
          stylers: [
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'road.highway',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'road.local',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'water',
          stylers: [
            {
              color: '#84afa3'
            },
            {
              lightness: 52
            }
          ]
        },
        {
          stylers: [
            {
              saturation: -17
            },
            {
              gamma: 0.36
            }
          ]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [
            {
              color: '#3f518c'
            }
          ]
        }
      ];

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

     this.createMarkers()
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
          } else {
            window.alert('We could not find that location - try entering a more specific place.');
          }
        });
      }
    }

  createMarkers() {
    const bounds = new this.props.google.maps.LatLngBounds();

    this.props.results.response.groups[0].items.forEach(item => {
      const position = item.venue.location;
      const title = item.venue.location.name;

      const marker = new this.props.google.maps.Marker({
        map: this.map,
        position: position,
        title: title,
        animation: this.props.google.maps.Animation.DROP,
        id: item.venue.id
      });

      this.markers.push(marker);

      marker.addListener('click', function() {
        /*TODO*/
      });
      bounds.extend(marker.position);
    });

    this.map.fitBounds(bounds);
  }

  // If google API has already been loaded, then loadMap
  componentDidMount() {
    this.loadMap();
  }

  // Else wait for the Map to be updated when Google Maps API will be asynchronously loaded and then loadMap
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevProps.initialCenter !== this.props.initialCenter) {
      this.map.panTo(this.props.initialCenter);
    }
    if (prevProps.results !== this.props.results) {
      this.createMarkers();
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