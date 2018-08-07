import { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { GoogleApiWrapper } from 'google-maps-react';

export class Map extends Component {
  static propTypes = {
    google: PropTypes.object.isRequired,
    zoom: PropTypes.number.isRequired,
    initialCenter: PropTypes.object.isRequired,
    onChangeNeighborhood: PropTypes.func.isRequired,
    results: PropTypes.object.isRequired,
    onClickMarker: PropTypes.func.isRequired,
    selectedItemId: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string.isRequired
  };

  // Set map variables
  markers = [];
  selectedMarker = {};
  placeInfoWindow = {};
  markerBounds = {};

  // Before the map loads try to get user's current location and update Apps initialCenter state
  componentWillMount() {
    if (navigator.geolocation) { // If geolocation is available
      navigator.geolocation.getCurrentPosition((position) => { // Get current position
        let currentLat = position.coords.latitude;
        let currentLng = position.coords.longitude;

        // Get current position's formated address
        let geocoder = new this.props.google.maps.Geocoder();
        geocoder.geocode({'location': {lat: currentLat, lng: currentLng}}, (results, status) => {
          if (status === 'OK') {
            if (results[0]) { // If address is found
              // Update App's input field with the current address
              document.getElementById('location-input').value = results[0].formatted_address;

              // Call onChangeNeighborhood() to uodate Apps initialCenter stateUpddate and update the map and places
              this.props.onChangeNeighborhood(currentLat, currentLng);
            }
          }
        })
      }
    )}
  }

  // If google API has already been loaded, when the Map component is rendered, then loadMap
  componentDidMount() {
    this.loadMap();
  }

  // Load map, create all the related elements and add listeners
  loadMap = () => {
    // If google maps API is available
    if (this.props.google) {
      let {initialCenter, zoom, google} = this.props;

      // Set map style using 'https://snazzymaps.com/style/18/retro' style
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

      // Set map options
      const mapConfig = {
        center: initialCenter,
        zoom: zoom,
        clickableIcons: false,
        styles: myStyles,
        mapTypeControl: false,
        fullscreenControl: false
      };

      // Load map
      this.map = new google.maps.Map(document.getElementById('map-area'), mapConfig);

      // Create a google Autocomplete object and bind it with new neighborhood's location input-field
      new google.maps.places.Autocomplete(document.getElementById('location-input'));

      this.createMarkers();

      // Create only one infowindow that will be displayed on the selected marker, if any
      this.placeInfoWindow  = new google.maps.InfoWindow();

      // When the info window is closed, hide it and unselect the marker it was displayed on
      this.placeInfoWindow.addListener('closeclick', () => {
        this.placeInfoWindow.marker = null;
      // Use onClickMarker() method to clear the selected marker
        this.props.onClickMarker('');
      });

      // Add a listener to the 'Go to location' button
      document.getElementById('location-button').addEventListener('click', this.getNewLocation );

      // Properly zoom the map to display all markers when app's viewport is resized
      google.maps.event.addDomListener(window, "resize", () => {
        google.maps.event.trigger(this.map, "resize");
        this.map.fitBounds(this.markerBounds);
      });

      // Take care the map not to zoom too close
      google.maps.event.addDomListener(this.map, "zoom_changed", () => {
        if (this.map.getZoom() > 17) {
          this.map.setZoom(17);
        }
      });
    }
  }

  // Use google Geocoder to get the location of the neighborhood's new address
  getNewLocation = () => {
    // Create a Geocoder object
    let geocoder = new this.props.google.maps.Geocoder();

    // Get the new neighborhood's address from the location input field
    let address = document.getElementById('location-input').value;

    // Check that the address is valid
    if (address === '') {
      swal('You must enter an area, or address!', '!!!', {
        className: "alert-window",
      });
    } else { // Give the address and a callBack function to the geocoder
      geocoder.geocode(
        { address: address
        }, (results, status) => { // This function is asynchronously called when the geocoder gets the results
          if (status === 'OK') { // If the address is found get its location
            let newLat = results[0].geometry.location.lat();
            let newLng = results[0].geometry.location.lng();

            // Call the onChangeNeighborhood() prop of the Map container, passing the new location
            this.props.onChangeNeighborhood(newLat, newLng);
          } else if (status === "ZERO_RESULTS") { // If the address is not found, alert the user and do nothing
            swal('We could not find that location!', 'Try entering a more specific place.',  {
              className: "alert-window",
            });
          } else { // If network is offline, alert the user when he clicks on 'Go to location' button
            swal('There is no network connection!', 'Please try later..',  {
              className: "alert-window",
            });
          }
        }
      );
    }
  }

  createMarkers =() => {
    const google = this.props.google;

    // Clear previous markers
    this.markers.forEach(marker =>
      marker.setMap(null)
    );
    this.markers = [];

    // Create markerBounds
    this.markerBounds = new google.maps.LatLngBounds();

    // Get places from fourSquare fetch results
    const places = this.props.results.response.groups[0].items;

    // Create a marker for each place
    places.forEach(place => {
      const position = place.venue.location; // Get place position
      const title = place.venue.location.name; // Get place title

      // Get marker icon with #E280A2 color
      const markerImage = new google.maps.MarkerImage(
        'https://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|1f7bad|40|_|%E2%80%A2',
        new google.maps.Size(21, 34),
        new google.maps.Point(0, 0),
        new google.maps.Point(10, 34),
        new google.maps.Size(21,34)
      );

      // create an animated marker
      const marker = new google.maps.Marker({
        map: this.map,
        position: position,
        title: title,
        animation: google.maps.Animation.DROP,
        id: place.venue.id,
        icon: markerImage
      });

      // Add the marker to the markers array
      this.markers.push(marker);

      // Add a listener to the marker, to display an infoWindow when the marker is clicked
      marker.addListener('click', event => {
        this.props.onClickMarker(marker.id);
      });

      // Update markerBounds with new marker's position
      this.markerBounds.extend(marker.position);
    });

    // When all markers are created fit the map to markerBounds
    this.map.fitBounds(this.markerBounds); // Autocenter
  }

  // When a map prop is updated handle it
  componentDidUpdate(prevProps, prevState) {
    /* If the map was not loaded when this map component rendered, then, when the 'google' prop is updated,
     * indicating that the Google Maps API is asynchronously loaded, load the map
     */
    if (prevProps.google !== this.props.google) {
        this.loadMap();
    }

    // Update map center when we go to a new neighborhood
    if (prevProps.initialCenter !== this.props.initialCenter) {
      this.map.panTo(this.props.initialCenter);
    }

    // Create markers for the new neighborhood
    if (prevProps.results !== this.props.results) {
      this.createMarkers();
    }

    // If place category is changed update the markers, so that only the markers of the newly selected Category are displayed
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      this.updateMarkers();
    }

    // Show item details for the new selected item
    if (prevProps.selectedItemId !== this.props.selectedItemId) {
      this.showItemDetails();
    }
  }

  // Update markers, so that only the markers of the newly selected Category are displayed
  updateMarkers = () => {
    // In case it is opended, hide the infoWindow,
    this.placeInfoWindow.marker = null;
    this.placeInfoWindow.close();

    // Clear bounds
    let markerBounds = new this.props.google.maps.LatLngBounds();

    this.markers.forEach((marker, index) => {
      /* Get place with same index as the marker, since we have one marker for each place
       * and each item of an associated place/marker pair has the same 'index' value
       */
      const place = this.props.results.response.groups[0].items[index];

      // Get marker's category from its associated place
      const markerCategory = place.venue.categories[0].shortName;

      if ( markerCategory === this.props.selectedCategory || this.props.selectedCategory === 'All Places') {
        marker.setMap(this.map) // Show marker
        markerBounds.extend(marker.position); // Add marker to bounds
      } else {
        marker.setMap(null); // Hide marker
      }
    })

    markerBounds.extend(this.props.initialCenter); // Include neighborhood center to bounds
    this.map.fitBounds(markerBounds);
    this.map.panTo(markerBounds.getCenter()); // Center map to bounts
  }

  // Animate the marker for the selected place and show place's details in an infowindow
  showItemDetails = () => {
    // If there is a selected item
    if (this.props.selectedItemId !== '') {

      // In case it is opended, hide the infoWindow,
      this.placeInfoWindow.marker = null;
      this.placeInfoWindow.close();

      /* Get the marker with same id as the selected place, since
       * each item of an associated place/marker pair has the same 'id' value
       */
      const selectedMarker = this.markers.filter(marker =>
        marker.id === this.props.selectedItemId
      )[0];
      this.selectedMarker = selectedMarker;

      // Shortly animate the marker
      selectedMarker.setAnimation(this.props.google.maps.Animation.BOUNCE);
      setTimeout(() => {
        this.selectedMarker.setAnimation(null)
      }, 10);

      // Get selected place's general information from FourSquare API general info
      const selectedPlace = this.props.results.response.groups[0].items.filter(item =>
        item.venue.id === this.props.selectedItemId
      )[0];

      /* Make a new fetch request to FourSquare API to get place's details and from these details use 'photo' and 'tip'
       * The Foursquare API has ****** a limit of 50 ******** API Calls per day for place details
       * More information on: https://developer.foursquare.com/docs/api/troubleshooting/rate-limits
       */
      fetch('https://api.foursquare.com/v2/venues/'
        + this.props.selectedItemId +
        '?client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR' +
        '&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180625')
      .then(result => result.json())
      .then(result => {
        // Get place's bestphoto and tip from the responce
        const placePhoto = result.response.venue.bestPhoto;
        const placeTip = result.response.venue.tips;

        this.placeInfoWindow.marker = selectedMarker;

        // Create infowindow content using place's general info and details
        this.placeInfoWindow.setContent(
          '<div class="info-window" tabIndex="0" aria-label="place info">' +
          '<h2>' +
          selectedPlace.venue.name +  // Place name
          '</h2>' +

          (result.meta.code === 200 ? // If the user is in the 50 API Calls limit per day for place details
            (placePhoto ?
              '<img class="info-image" alt="place-image" src="' +  // Place photo url
              placePhoto.prefix  +
              'cap100' +
              placePhoto.suffix +
              '">'
            :
              ''
            ) +
            (placeTip.groups[0] && placeTip.groups[0].items[0] ?
              '<div class="info-tip">' +  // Place tip
                placeTip.groups[0].items[0].text +
              '</div>'
            :
              '<div class="info-tip"></div>'
            )
          :
            ''
          ) +

          (selectedPlace.venue.location.address ?
            '<div class=info-address>' +
              selectedPlace.venue.location.address +  // Place address
            '</div>'
          :
            ''
          ) +
          '</div>'
        );

        // Show the infowindow when marker's animation ends
        setTimeout(() => {
          this.placeInfoWindow.open(this.map, selectedMarker);
        }, 400);
      })
      .catch(error => { // If details fetch fails due to network problem, show only general place info
        this.placeInfoWindow.marker = selectedMarker;

        // Create infowindow content using place's general info and details
        this.placeInfoWindow.setContent(
          '<div class="info-window" tabIndex="0" aria-label="place info">' +
          '<h2>' +
          selectedPlace.venue.name +  // Place name
          '</h2>' +

          (selectedPlace.venue.location.address ?
            '<div class=info-address>' +
              selectedPlace.venue.location.address +  // Place address
            '</div>'
          :
            ''
          ) +
          '</div>'
        );
        this.placeInfoWindow.open(this.map, selectedMarker);
      });
    } else { // If the previously selected place is now unselected, close the infowindow
      this.placeInfoWindow.marker = null;
      this.placeInfoWindow.close();
    }
  }

  render() {
    return null;
  }
}

// GoogleApiWrapper asynchronously loads the Google Maps API and passes is to the Map as 'google' prop
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDoF5xjAASOfupCeQwuTUrPYdRwrYvC6AI',
  libraries: ['places']
})(Map);