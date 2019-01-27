import React, { Component } from 'react';
import Restaurant from '/imports/api/restaurant';
import Address from '/imports/api/address';
import Deal from '/imports/api/deal';

export default class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onRestaurantSearch = event => {
    event.preventDefault();
    this.props.onRestaurantSearch(this.state.term);
  }

  render() {
    return (
      <div className='search-container'>
        <form onSubmit={this.onRestaurantSearch}>
          <input
            className='main-search-bar'
            type='text'
            placeholder='Search for restaurant'
            name='search'
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button type='submit'>
            <img className='search-img' src='/magnifying-glass.svg' />
          </button>
        </form>
      </div>
    );
  }
}
