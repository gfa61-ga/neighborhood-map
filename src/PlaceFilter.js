import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlaceFilter extends Component {
  static propTypes = {
    selectedItemId: PropTypes.string,
    selectedCategory: PropTypes.string
  };

  // When the place filter renders, bind a click listener to it
  componentDidMount() {
    document.getElementById('place-filter').addEventListener('change',
      this.props.onPlaceFilter  // When the user selects a category call onPlaceFilter to update App's selectedCategory state
    );
  }

  // Render a <select> item with all the categories
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