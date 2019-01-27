import React, { Component } from 'react';
import Tag from './Tag.jsx';

export default class TagBar extends Component {

  render() {
    return (
      <div className="tagbar">
        <Tag /> <Tag /> <Tag />
      </div>
    );
  }
}
