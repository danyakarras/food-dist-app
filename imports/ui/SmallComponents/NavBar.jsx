import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton.jsx';
import SearchBar from './SearchBar.jsx';

export default class NavBar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="navbar-search-container">
          <SearchBar />
        </div>
        <NavLink to="/home" className="navbar-link" activeClassName="activeLink">Home</NavLink>
        <NavLink to="/providerProfile" className="navbar-link"  activeClassName="activeLink">Provider</NavLink>
        <div className="navbar-profile-button-continer">
          <ProfileButton />
        </div>
      </div>
    );
  }
}
