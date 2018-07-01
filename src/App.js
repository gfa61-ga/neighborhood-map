import React, { Component } from 'react';
import './App.css';
import initialData from './initial-data.js';
import Map from'./Map.js';
import PlaceList from'./PlaceList.js';
import PlaceFilter from'./PlaceFilter.js';
import { GoogleApiWrapper } from 'google-maps-react';
import swal from 'sweetalert';

class App extends Component {
  state = {
    neighborhhoodLocation: {
      lat: 38.24120531635877,
      lng: 21.7349910736084
    },
    zoom: 17,
    results: initialData,
    selectedItemId: '',
    selectedCategory: 'All Places'
  };

  categories = [];

  componentWillMount() {
    this.createCategories(this.state.results);
  }

  createCategories(results) {
    this.categories = [];
    this.categories = results.response.groups[0].items.map(item =>
      item.venue.categories[0].shortName
    );

    this.categories.sort();

    this.categories = this.categories.filter((category, index, array) =>
      category !== array[index+1]
    );

    this.categories.unshift("All Places");
  }

  componentDidMount() {
    document.getElementById('hide-list-button').addEventListener('click', this.togglePlaceList);
  }

  onPlaceFilter = () => {
    this.setState({
      selectedCategory: document.getElementById('place-filter').value,
      selectedItemId: ''
    });
  }

  onClickListItem = (event) => {
    this.setState({selectedItemId: event.target.id})
  }

  togglePlaceList() {
    document.querySelector(".App").classList.toggle('hide-list');
  }

  onChangeNeighborhood = (lat, lng) => {
    fetch('https://api.foursquare.com/v2/venues/explore?ll='
      + lat + ',' + lng +
      '&sortByDistance=1' +
      '&client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR' +
      '&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180625')
    .then(result => result.json())
    .then(result => {
      this.createCategories(result);
      document.getElementById('place-filter').value = 'All Places';
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
            <input id="location-input" type="text"
              defaultValue="Pl. Ipsilon Alonion, Patras, Greece" aria-label="Neighborhhood Location"/>
            <input id="location-button" type="button" value="Go" aria-label="Go to location"/>
            <input id="hide-list-button" type="button" value="&#9776;" aria-label="Toggle place list's visibility"/>
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
        <div id="map-area">
          <Map
            google={this.props.google}
            initialCenter={state.neighborhhoodLocation}
            zoom={state.zoom}
            onChangeNeighborhood={this.onChangeNeighborhood}
            results={state.results}
            onClickMarker={this.onClickMarker}
            selectedItemId={state.selectedItemId}
            selectedCategory={state.selectedCategory}
          />
        </div>
      </div>
    );
  }
}

// GoogleApiWrapper asynchronously loads the Google Maps API and passes is to the MapContainer as 'google' prop
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDoF5xjAASOfupCeQwuTUrPYdRwrYvC6AI',
  libraries: ['places']
})(App);

