import React, { Component } from 'react';

export default class SearchBar extends Component {

  render() {
    return (
      <div class="search-container">
	    <form>
	      <input type="text" placeholder="Search.." name="search"/>
	      <button type="submit"><img className="search-img" src="/magnifying-glass.svg"/></button>
	    </form>
	  </div>
    );
  }
}
