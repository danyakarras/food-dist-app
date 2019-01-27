import React, { Component } from 'react';

export default class Posting extends Component {

  render() {
    return (
      <div className="posting-card">
      <div className="parent">
        <div className="posting-name left">
          <div className="left">{this.props.name}</div>
          <br/>
          <p className="posting-top left">{this.props.price}</p>
          <p className="posting-top right">{this.props.time}</p>
        </div>
        <div className="posting-bottom">
          <p className="left">{this.props.restaurant}</p>
          <p className="right">{this.props.quantity}</p>
        </div>
      </div>
      </div>
    );
  }
}
