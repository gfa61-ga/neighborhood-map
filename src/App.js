/* This app displays the map and a list of up to 30 places, provided by the FourSquare Places API
 * The categories and ids provided by this API are used to filter and uniquely identify these places
 */
import React, { Component } from 'react';
import './App.css';
import initialData from './initial-data.js';
import Map from'./Map.js';
import PlaceList from'./PlaceList.js';
import PlaceFilter from'./PlaceFilter.js';

/* get the SweetAlert library to make popup messages
 * More details at: https://sweetalert.js.org/
 */
import swal from 'sweetalert';

// initialData and neighborhhoodLocation for Pl. Ipsilon Alonion, Patras, Greece
class App extends Component {
  state = {
    neighborhhoodLocation: {
      lat: 38.24120531635877,
      lng: 21.7349910736084
    },
    zoom: 17,
    results: initialData,  // General information from 30 places recommended by fourSquare
    selectedItemId: '', // '' indicates that there is no place selected
    selectedCategory: 'All Places',
    online: false
  };

  // The categories we use to filter places
  categories = [];

  mapAreaHasRendered = false;

  // Create categories before rendering the App
  componentWillMount() {
    this.createCategories(this.state.results);
    this.setState({online: navigator.onLine});
  }

  // Create categories using results from a fourSquare 'Get Venue Recommendations' response which contains 30 place items
  createCategories(results) {
    // Clear previous categories if any
    this.categories = [];

    // Get caterory names
    this.categories = results.response.groups[0].items.map(item =>
      item.venue.categories[0].shortName
    );

    // Sort category names alphabetically
    this.categories.sort();

    // Remove duplicates
    this.categories = this.categories.filter((category, index, array) =>
      category !== array[index+1]
    );

    // Add "All Places" at the beginning of categories array
    this.categories.unshift("All Places");
  }

  // When the App is rendered
  componentDidMount() {
    // Add a click listener to the 'hide-list-button'
    document.getElementById('hide-list-button').addEventListener('click', this.togglePlaceList);

    // Add listeners for network status and update state
    window.addEventListener('online', (event) => {
      this.setState({
        online: navigator.onLine
      });
    });

    window.addEventListener('offline', (event) => {
      this.setState({
        online: navigator.onLine
      });
    });

    // If app online when loaded, the map-area has rendered
    if (this.state.online) {
      this.mapAreaHasRendered = true;
    }
  }

  componentDidUpdate() {
    // If app offline when loaded, the map-area will render when app goes online
    if (this.state.online) {
      this.mapAreaHasRendered = true;
    }
  }

  // When a new category is selected update state and clear selectedItem
  onPlaceFilter = () => {
    this.setState({
      selectedCategory: document.getElementById('place-filter').value,
      selectedItemId: ''
    });
  }

  // When a new place is selected in place list, update state
  onClickListItem = (event) => {
    if (this.mapAreaHasRendered) {
      this.setState({
        selectedItemId: event.target.id
      });
    }
  }

  // When the 'hide-list-button' is press toggle (show / hide) the place list using CSS
  togglePlaceList() {
    document.querySelector(".App").classList.toggle('hide-list');
  }

  /* When the 'Go to location' button is pressed, get the new neighborhoods lat and lng,
   * make a fetch request to FourSquare API and update the state using the response data
   */
  onChangeNeighborhood = (lat, lng) => {
    fetch('https://api.foursquare.com/v2/venues/explore?ll='
      + lat + ',' + lng +
      '&sortByDistance=1' +
      '&limit=50' +
      '&radius=650' +
      '&client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR' +
      '&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180625')
    .then(result => result.json())
    .then(result => {
      // Create the categories of the new places
      this.createCategories(result);

      // Reset the value of 'place-filter' <select> element
      document.getElementById('place-filter').value = 'All Places';

      // Update state
      this.setState({
        results: result,
        neighborhhoodLocation: {
          lat: lat,
          lng: lng
        },
        selectedItemId: '',
        selectedCategory: 'All Places'
      });
    })
    .catch(error =>
      swal('Network error!', 'Please try later', {
        className: "alert-window",
      })
    );
  }

  // When a marker is clicked update state
  onClickMarker = (markerId) => {
    this.setState({selectedItemId: markerId})
  }

  render() {
    const state = this.state;

    return (
      <div className="App">

        <div className="input-area">
          <div className="search-places">
            <PlaceFilter
              onPlaceFilter={this.onPlaceFilter}
              categories={this.categories}
            />
          </div>
          <div className="neighborhood-location">
            <input id="location-input" type="search"
              defaultValue="Pl. Ipsilon Alonion, Patras, Greece" aria-label="Neighborhhood Location"/>
            <input
              id="location-button"
              type="button"
              value="Go"
              aria-label="Go to location"
              tabIndex="0"/>
            <input
              id="hide-list-button"
              type="button"
              value="&#9776;"
              aria-label="Toggle place list's visibility"
              tabIndex="0"/>
          </div>
        </div>

        <div className="place-list">
          <PlaceList
            items={state.results.response.groups[0].items}
            onClickListItem={this.onClickListItem}
            selectedItemId={state.selectedItemId}
            selectedCategory={state.selectedCategory}
          />
        </div>

        <div className="list-footer"/>
        <div id="map-area" tabIndex="0" role="application" aria-label="Neighborhhood map">
          { /* If this is the first time map-area renders
             *  and network is offline, display map-message
             */
            (this.state.online || this.mapAreaHasRendered)
          ?
            <Map
              initialCenter={state.neighborhhoodLocation}
              zoom={state.zoom}
              onChangeNeighborhood={this.onChangeNeighborhood}
              results={state.results}
              onClickMarker={this.onClickMarker}
              selectedItemId={state.selectedItemId}
              selectedCategory={state.selectedCategory}
            />
          :
            <div className="map-message">
              <p>
                You are offline..!!
                <ul>
                  <li>NeighborHood Map will load and </li>
                  <li>Go button will start to work</li>
                </ul>
                when you go online..
              </p>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;

