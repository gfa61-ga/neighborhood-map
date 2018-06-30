import { GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import Map from'./Map.js';
import PropTypes from 'prop-types';

export class MapContainer extends Component {
  static propTypes = {
    zoom: PropTypes.number.isRequired,
    initialCenter: PropTypes.object.isRequired
  }

  render() {
    return (
        <Map
          google={this.props.google}
          initialCenter={this.props.initialCenter}
          zoom={this.props.zoom}
          onChangeNeighborhood={this.props.onChangeNeighborhood}
          results={this.props.results}
          onClickMarker={this.props.onClickMarker}
          selectedItemId={this.props.selectedItemId}
          selectedCategory={this.props.selectedCategory}
        />
    );
  }
}

// GoogleApiWrapper asynchronously loads the Google Maps API and passes is to the MapContainer as 'google' prop
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDoF5xjAASOfupCeQwuTUrPYdRwrYvC6AI',
  libraries: ['places']
})(MapContainer);
