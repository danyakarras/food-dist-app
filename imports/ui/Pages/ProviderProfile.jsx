import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../SmallComponents/NavBar.jsx';

export default class ProviderProfile extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className='page-width'>
          <div id="restaurant-info-card">
          </div>
          <div id="postings-div">
          </div>
        </div>
      </div>
    );
  }
}
