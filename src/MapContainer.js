import { GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import Map from'./Map.js';
import PropTypes from 'prop-types';

export class MapContainer extends Component {
  static propTypes = {
    zoom: PropTypes.number.isRequired,
    initialCenter: PropTypes.object.isRequired,
    onChangeNeighborhood: PropTypes.func.isRequired,
    results: PropTypes.object.isRequired,
    onClickMarker: PropTypes.func.isRequired,
    selectedItemId: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string.isRequired
  }

  render() {
    return (
        <Map
          google={this.props.google} // pass Google Maps API to the Map component
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

