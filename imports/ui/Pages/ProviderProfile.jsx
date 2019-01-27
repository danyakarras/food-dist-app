import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../SmallComponents/NavBar.jsx';

export default class ProviderProfile extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h2>This component will be the base of the restaurant's profile page!</h2>
        <Link to="/">Go back to the home page</Link>
        <p>More text blah blah blah</p>
        <p>More profile page</p>
      </div>
    );
  }
}
