import React, { Component } from 'react';
import './App.css';
import data from './results.js';


class App extends Component {
  state = {
    neighborhhoodLocation: {
      lat: 38.2415052,
      lng: 21.7367451
    }
  }

  results = data;
  categories = [];

  componentWillMount() {
    this.categories = this.results.response.groups[0].items.map(item =>
      item.venue.categories[0].shortName
    )

    this.categories.sort()

    this.categories = this.categories.filter((category, index, array) =>
      category !== array[index+1]
    )

    this.categories.unshift("All Places")
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
          <div className="neighborhhood-location">
            <input id="location-input" type="text" defaultValue="Psila Alonia, Patras, Greece" aria-label="Neighborhhood Location"/>
            <input id="location-button" type="button" value="Go" aria-label="Go to location"/>
            <input id="hide-list-button" type="button" value="&#9776;" aria-label="Toggle place list's visibility"/>
          </div>
        </div>

        <div className="place-list">
          <ul role="menu" aria-label="menu">
              {
                this.results.response.groups[0].items.map(item =>
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

        <div className="list-footer">
        </div>

        <div className="map-area">
          <div id="map"/>
        </div>
      </div>
    );
  }
}

export default App;
