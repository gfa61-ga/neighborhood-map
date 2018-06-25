import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="input-area">
          <div className="search-places">
            <select id="place-filter" aria-label="Places filter">
              <option value="All Places">All Places</option>
              <option value="food">Food</option>
              <option value="shops">Shops</option>
              <option value="fun">Fun</option>
            </select>
          </div>
          <div className="neighborhhood-location">
            <input id="location-input" type="text" placeholder="Athens, Greece" aria-label="Neighborhhood Location"/>
            <input id="location-button" type="button" value="Go" aria-label="Go to location"/>
            <input id="hide-list-button" type="button" value="&#9776;" aria-label="Toggle place list's visibility"/>
          </div>
        </div>

        <div className="place-list">
          <ul role="menu" aria-label="menu">
            <li role="menuitem" tabindex="0">Place 1Place 1Place 1Place 1Place 1Place 1Place 1Place 1Place 1Place 1Place 1Place 1Place 1Place 1</li>
            <li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li>
            <li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li>
            <li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li>
            <li className="selected" role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li>
            <li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li>
            <li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li>
            <li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li><li role="menuitem" tabindex="0">Place 1</li>
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
