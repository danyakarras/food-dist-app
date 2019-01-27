import React, { Component } from 'react';
import Restaurant from '/imports/api/restaurant';

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  onInputChange = event => {
    let key = event.currentTarget.name;
    let obj = {};
    obj[key] = event.target.value;

    this.setState(obj);
  };

  onFormSubmit = event => {
    event.preventDefault();

    Restaurant.insert({
      _id: this.props.userIdToken,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      createdAt: new Date()
    });

    this.clearForm();
  };

  onSubmit = () => {
    console.log(Restaurant.find().fetch());
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            id='name'
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.onInputChange}
          />
          <input
            id='email'
            name='email'
            type='text'
            value={this.state.email}
            onChange={this.onInputChange}
          />
          <input
            id='phone'
            name='phone'
            type='text'
            value={this.state.phone}
            onChange={this.onInputChange}
          />

          <input type='submit' value='SUBMIT' />
        </form>
      </div>
    );
  }
}
