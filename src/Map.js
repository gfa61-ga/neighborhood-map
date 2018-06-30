import React, { Component } from 'react';
import PropTypes from 'prop-types';
// https://sweetalert.js.org/
import swal from 'sweetalert';

export class Map extends Component {
  static propTypes = {
    google: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    initialCenter: PropTypes.object.isRequired
  }

  markers = [];
  selectedMarker ={}
  placeInfoWindow = {};

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
        styles: myStyles,
        mapTypeControl: false
      }

      this.map = new this.props.google.maps.Map(document.getElementById('map-area'), mapConfig);

      new this.props.google.maps.places.Autocomplete(document.getElementById('location-input'));

      this.placeInfoWindow  = new this.props.google.maps.InfoWindow();

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
      swal('You must enter an area, or address!', {
        className: "alert-window",
      });
    } else {
      geocoder.geocode(
        { address: address
        }, function(results, status) {
          if (status === 'OK') {
            let newLat = results[0].geometry.location.lat();
            let newLng = results[0].geometry.location.lng();

            ref.props.onChangeNeighborhood(newLat, newLng);
          } else {
            swal('We could not find that location!', 'Try entering a more specific place.',  {
        className: "alert-window",
      });
          }
        });
      }
    }

  createMarkers() {
    this.markers = [];
    const bounds = new this.props.google.maps.LatLngBounds();

    this.props.results.response.groups[0].items.forEach(item => {
      const position = item.venue.location;
      const title = item.venue.location.name;


      const markerImage = new this.props.google.maps.MarkerImage(
        'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|1f7bad|40|_|%E2%80%A2',
        new this.props.google.maps.Size(21, 34),
        new this.props.google.maps.Point(0, 0),
        new this.props.google.maps.Point(10, 34),
        new this.props.google.maps.Size(21,34)
      );

      const marker = new this.props.google.maps.Marker({
        map: this.map,
        position: position,
        title: title,
        animation: this.props.google.maps.Animation.DROP,
        id: item.venue.id,
        icon: markerImage
      });

      this.markers.push(marker);

      marker.addListener('click', event => {
        this.props.onClickMarker(marker.id);
      });

      bounds.extend(marker.position);
    });
console.log()
    this.map.fitBounds(bounds);
    this.map.panToBounds(bounds);
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

    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      this.updateMarkers();
    }
    if (prevProps.selectedItemId !== this.props.selectedItemId) {
      this.showItemDetails();
    }
  }

  showItemDetails() {
    const selectedMarker = this.markers.filter(marker =>
      marker.id === this.props.selectedItemId
    );

    selectedMarker[0].setAnimation(this.props.google.maps.Animation.BOUNCE);

    this.selectedMarker = selectedMarker[0]

    setTimeout(() => {
      this.selectedMarker.setAnimation(null)
    }, 3000);

    const selectedItem = this.props.results.response.groups[0].items.filter(item =>
      item.venue.id === this.props.selectedItemId
    );

/*    fetch('https://api.foursquare.com/v2/venues/'
      + this.props.selectedItemId +
      '?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR' +
      '&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180625')
    .then(result => result.json())
    .then(result => {
      console.log(result);
*/

    let result = {meta: {code: 300}};
    this.placeInfoWindow.marker = selectedMarker[0];
    this.placeInfoWindow.setContent(
      '<div class="info-window">' +
      '<h2>' +
      selectedItem[0].venue.name +
      '</h2>' +

      (result.meta.code === 200 ?
      '<img class="info-image" src="' +
        result.response.venue.photos.groups[0].items[0].prefix  +
        'cap100' +
        result.response.venue.photos.groups[0].items[0].suffix +
      '">' +
      '<div class="info-tip">' +
        result.response.venue.tips.groups[0].items[0].text +
      '</div>'
      : '') +

      (selectedItem[0].venue.location.address ?
      '<div class=info-address>' +
        selectedItem[0].venue.location.address +
      '</div>'
      : '') +
      '</div>'
    );
    this.placeInfoWindow.open(this.map, selectedMarker[0]);
/*    })
    .catch(error => console.log(error));
*/
  }

  updateMarkers() {
    this.markers.forEach((marker, index) => {
      if (this.props.results.response.groups[0].items[index].venue.categories[0].shortName !== this.props.selectedCategory) {
        marker.setMap(null);
      } else {
        marker.setMap(this.map)
      }
    })
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