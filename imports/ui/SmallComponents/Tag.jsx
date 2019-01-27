import React, { Component } from 'react';

export default class Tag extends Component {

  render() {
    return (
      <div className="tag">
        <span className="tag-text">produce <img className="tag-x" src="/close.svg"/></span>
      </div>
    );
  }
}
