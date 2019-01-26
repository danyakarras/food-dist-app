import React, { Component } from 'react';
import Posting from './Posting.jsx';

export default class Home extends Component {

  render() {
    return (
      <div>
        <h2>This component will be the base of our homepage!</h2>
        <p>More text blah blah blah</p>
        <p>More profile page</p>
        <Posting />
        <Posting />
        <Posting />
      </div>
    );
  }
}
