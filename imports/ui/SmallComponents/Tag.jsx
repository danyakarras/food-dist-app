import React, { Component } from 'react';

export default class Tag extends Component {

  render() {
  	const {text, color} = this.props;
  	var style={backgroundColor : color};
    return (
      <div className="tag" style={style}>
        <span className="tag-text">{text} <img className="tag-x" src="/close.svg"/></span>
      </div>
    );
  }
}
