import React, { Component } from 'react';
import Tag from './Tag.jsx';

export default class TagBar extends Component {

  render() {
    return (
      <div className="tagbar">
        <Tag text="produce" color="#88ab75"/> <Tag text="vegetarian" color="#5b8260"/> <Tag text="meals" color="#7f3f3f"/>
      </div>
    );
  }
}
