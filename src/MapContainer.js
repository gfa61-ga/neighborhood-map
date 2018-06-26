import { GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import Map from'./Map.js';

export class MapContainer extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
        />
    );
  }
}

// GoogleApiWrapper asynchronously loads the Google Maps API and pass is to the MapContainer as 'google' prop
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDoF5xjAASOfupCeQwuTUrPYdRwrYvC6AI'
})(MapContainer);

