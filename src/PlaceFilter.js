import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlaceFilter extends Component {
  static propTypes = {
    selectedItemId: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string.isRequired
  };

  componentDidMount() {
    document.getElementById('place-filter').addEventListener('change', this.props.onPlaceFilter);
  }

  render() {
    return (
    <select id="place-filter" aria-label="Places filter">
      {
        this.props.categories.map(category =>
          <option
            key={category}
            value={category}>
            {category}
          </option>
        )
      }
    </select>
    );
  }
}

export default PlaceFilter;