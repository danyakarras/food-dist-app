import React, { Component } from 'react';
import ProfileButton from './SmallComponents/ProfileButton.jsx';
import SearchBar from './SmallComponents/SearchBar.jsx';
import Posting from './Posting.jsx';

export default class Home extends Component {

  render() {
    return (
      <div>
        <ProfileButton />
        <SearchBar />
        <Posting />
        <Posting />
        <Posting />
      </div>
    );
  }
}
