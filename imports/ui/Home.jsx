import React, { Component } from 'react';
import ProfileButton from './SmallComponents/ProfileButton.jsx';
import SearchBar from './SmallComponents/SearchBar.jsx';
import TagBar from './SmallComponents/TagBar.jsx';
import Posting from './Posting.jsx';
import Form from './Form.jsx';

export default class Home extends Component {

  render() {
    return (
      <div>
        <div className="top-image">
          <ProfileButton />
          <SearchBar />
          <TagBar />
        </div>
        <div className="postings-container">
          <Posting name="Gala Apples" restaurant="Walmart" time="until 5pm" price="$0.50 /lb" quantity="4" address="12 blank street"/>
          <Posting name="Gala Apples" restaurant="Walmart" time="until 5pm" price="$0.50 /lb" quantity="3" address="12 blank street"/>
          <Posting name="Gala Apples" restaurant="Walmart" time="until 5pm" price="$0.50 /lb" quantity="2" address="12 blank street"/>
        </div>
        <Form />
      </div>
    );
  }
}
