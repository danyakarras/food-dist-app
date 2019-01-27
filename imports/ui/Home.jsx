import React, { Component } from 'react';
import ProfileButton from './SmallComponents/ProfileButton.jsx';
import SearchBar from './SmallComponents/SearchBar.jsx';
import Posting from './Posting.jsx';
import Form from './Form.jsx';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="top-image">
          <ProfileButton />
          <SearchBar />
        </div>
        <Posting />
        <Posting />
        <Posting />

        <Form />
      </div>
    );
  }
}
