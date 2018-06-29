import React, { Component } from 'react';
import './App.css';
import initialData from './initial-data.js';
import MapContainer from'./MapContainer.js';

class App extends Component {
  state = {
    neighborhhoodLocation: {
      lat: 38.24120531635877,
      lng: 21.7349910736084
    },
    zoom: 17,
    results: initialData
  };


  categories = [];

  componentWillMount() {
    this.createCategories(this.state.results);
  }

  componentDidMount() {
    document.getElementById('hide-list-button').addEventListener('click', this.togglePlaceList);
  }

  togglePlaceList() {
    document.querySelector(".App").classList.toggle('hide-list');
  }

  createCategories(results) {
           console.log(this.state.results)
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
      this.setState({
        results: result,
        neighborhhoodLocation: {
          lat: lat,
          lng: lng
        }
      });
    })
    .catch(error => console.log(error));
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
                this.state.results.response.groups[0].items.map(item =>
                  <li
                    key={item.venue.id}
                    role="menuitem"
                    tabIndex="0">
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
          />
        </div>
      </div>
    );
  }
}

export default App;
