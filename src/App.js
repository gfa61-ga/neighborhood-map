import React, { Component } from 'react';
import './App.css';
import initialData from './initial-data.js';
import MapContainer from'./MapContainer.js';
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

  componentDidMount() {
    document.getElementById('hide-list-button').addEventListener('click', this.togglePlaceList);

    document.getElementById('place-filter').addEventListener('change', () => {
     this.setState({selectedCategory: document.getElementById('place-filter').value, selectedItemId: ''});
    });

    document.querySelector('.place-list').addEventListener('click', e => this.onClickListItem(e));
  }

  onClickListItem = (event) => {
        this.setState({selectedItemId: event.target.id})
  }

  togglePlaceList() {
    document.querySelector(".App").classList.toggle('hide-list');
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

  onChangeNeighborhood = (lat,lng) => {
    fetch('https://api.foursquare.com/v2/venues/explore?ll='
      + lat + ',' + lng +
      '&sortByDistance=1' +
      '&client_id=HPAOKFVI0WPGYVFGZW4QQVZTJPKCBCPWPQT3WULI3TKLTRUR' +
      '&client_secret=NILFKLKATY20ZQU1Q2OZVMRRPYMONJMG4OQ144SHHIEXGAMJ&v=20180625')
    .then(result => result.json())
    .then(result => {
      this.createCategories(result);
      document.getElementById('place-filter').value = 'All Places'
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
    return (
      <div className="App">
        <div className="input-area">
          <div className="search-places">
            <select id="place-filter" aria-label="Places filter">
              {
                this.categories.map(category =>
                  <option
                    key={category}
                    value={category}>
                    {category}
                  </option>
                )
              }
            </select>
          </div>
          <div className="neighborhood-location">
            <input id="location-input" type="text"
              defaultValue="Pl. Ipsilon Alonion, Patras, Greece" aria-label="Neighborhhood Location"/>
            <input id="location-button" type="button" value="Go" aria-label="Go to location"/>
            <input id="hide-list-button" type="button" value="&#9776;" aria-label="Toggle place list's visibility"/>
          </div>
        </div>

        <div className="place-list">
          <ul role="menu" aria-label="menu">
              {
                this.state.results.response.groups[0].items.filter(item => {
                   return item.venue.categories[0].shortName === this.state.selectedCategory || this.state.selectedCategory === 'All Places'
                 }
                ).map(item =>
                  <li
                    key={item.venue.id}
                    id={item.venue.id}
                    role="menuitem"
                    tabIndex="0"
                    className={item.venue.id === this.state.selectedItemId ? 'selected' : ''}
                    >
                    {item.venue.name}
                  </li>
                )
              }
          </ul>
       </div>

        <div className="list-footer"/>
        <div id="map-area">
          <MapContainer
            initialCenter={this.state.neighborhhoodLocation}
            zoom={this.state.zoom}
            onChangeNeighborhood={this.onChangeNeighborhood}
            results={this.state.results}
            onClickMarker={this.onClickMarker}
            selectedItemId={this.state.selectedItemId}
            selectedCategory={this.state.selectedCategory}

          />
        </div>
      </div>
    );
  }
}

export default App;
