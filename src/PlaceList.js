import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlaceList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    onClickListItem: PropTypes.func.isRequired,
    selectedItemId: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string.isRequired
  };

  // When the list renders, bind click listeners to it
  componentDidMount() {
    document.querySelector('.place-list').addEventListener('click', e =>
      this.props.onClickListItem(e)  // When the user clicks on a list item call onClickListItem to update App's selectedItemId state
    );

    document.querySelector('.place-list').addEventListener('keydown', e => {
        if (e.keyCode === 32) { 
          this.props.onClickListItem(e)  // When the user press SPACE button on a focused list item, call onClickListItem to update App's selectedItemId state
        }
      }
    );
  }

  render() {
    const props = this.props;
    const selectedCategory = props.selectedCategory;

    // Only the places of the selectedCategory are rendered in the <ul> list
    return (
      <ul role="menu">
          { /* Find places of the selectedCategory */
            props.items.filter(place => {
              const placeCategory = place.venue.categories[0].shortName;
               return placeCategory === selectedCategory || selectedCategory === 'All Places'
            }
            ).map(place =>  /* Then render each of the found places*/
              <li
                key={place.venue.id}
                id={place.venue.id}
                tabIndex="0"
                className={place.venue.id === props.selectedItemId ? 'selected' : ''} /* Use CSS to spot the selected place*/
                >
                {place.venue.name}
              </li>
            )
          }
      </ul>
    );
  }
}

export default PlaceList;