import React, { Component } from 'react';
import Restaurant from '/imports/api/restaurant';
import Address from '/imports/api/address';
import Template from '/imports/api/template';
import Deal from '/imports/api/deal';

export default class SearchBar extends Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(
      Restaurant.find({
        name: { $regex: '.*' + this.state.term + '.*' }
      }).fetch()
    );
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className='search-container'>
        <form onSubmit={this.onFormSubmit}>
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
