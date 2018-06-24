import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="input-area">
          <div className="search-places">
            <select id="place-filter">
              <option value="">Filter Places by</option>
              <option value="food">Food</option>
              <option value="shops">Shops</option>
              <option value="fun">Fun</option>
            </select>
          </div>
          <div className="neighborhhood-location">
            <input id="location-input" type="text" placeholder="Athens, Greece"/>
            <input id="location-button" type="button" value="Go"/>
            <input id="hide-list-button" type="button" value="&#9776;"/>
          </div>
        </div>

        <div className="place-list">
          <ul>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
            <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li> <li>Place 1</li>
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
