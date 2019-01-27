import React, { Component } from 'react';
import Posting from './Posting.jsx';

export default class Home extends Component {

  render() {
    return (
      <div>
        <h2>This component will be the base of our homepage!</h2>
        <p>More text blah blah blah</p>
        <p>More profile page</p>
        <Posting name="Gala Apples" restaurant="Walmart" time="until 5pm" price="$0.50 /lb" quantity="4" address="12 blank street"/>
        <Posting name="Gala Apples" restaurant="Walmart" time="until 5pm" price="$0.50 /lb" quantity="3" address="12 blank street"/>
        <Posting name="Gala Apples" restaurant="Walmart" time="until 5pm" price="$0.50 /lb" quantity="2" address="12 blank street"/>
      </div>
    );
  }
}
