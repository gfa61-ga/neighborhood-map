import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlaceList extends Component {
  static propTypes = {
    items: PropTypes.object.isRequired,
    onClickListItem: PropTypes.func.isRequired,
    selectedItemId: PropTypes.string.isRequired,
    selectedCategory: PropTypes.string.isRequired
  };

  componentDidMount() {
    document.querySelector('.place-list').addEventListener('click', e => this.props.onClickListItem(e));
  }

  render() {
    const props = this.props;
    const selectedCategory = props.selectedCategory;

    return (
      <ul role="menu" aria-label="menu">
          {
            props.items.filter(item => {
               return item.venue.categories[0].shortName === selectedCategory || selectedCategory === 'All Places'
             }
            ).map(item =>
              <li
                key={item.venue.id}
                id={item.venue.id}
                role="menuitem"
                tabIndex="0"
                className={item.venue.id === props.selectedItemId ? 'selected' : ''}
                >
                {item.venue.name}
              </li>
            )
          }
      </ul>
    );
  }
}

export default PlaceList;