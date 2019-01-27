import React, { Component } from 'react';
import Deal from '/imports/api/deal';
import NavBar from '../SmallComponents/NavBar.jsx';
import { NavLink } from 'react-router-dom';

export default class PostingEditPage extends Component {
  state = {
    name: '',
    price: '',
    unit: '',
    quantity: '',
    startTime: '',
    endTime: ''
  };

  onInputChange = event => {
    let key = event.currentTarget.name;
    let obj = {};
    obj[key] = event.target.value;

    this.setState(obj);
  };

  onFormSubmit = event => {
    event.preventDefault();

    Deal.insert({
      restaurantId: 5,
      name: this.state.name,
      price: this.state.price,
      priceUnit: this.state.unit,
      quantity: this.state.quantity,
      startTime: this.state.startTime,
      endTime: this.state.endTime
    });
  };

  onSubmit = () => {
    event.preventDefault();
    console.log(Deal.find().fetch());
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className='page-width'>
	        <div id="back-to-bar">
	        	<NavLink to="/providerProfile" id="back-to-text"><img id="back-arrow" src="/green-large.png"/>Back to my Table</NavLink>
	        </div>
          <div id='posting-image'>
            <img src='/gala-apples.jpg' />
          </div>
          <form id='posting-create-form' onSubmit={this.onSubmit}>
            <div>Name</div>
            <input
              id='name'
              name='name'
              type='text'
              className='edit-form baloo-font'
              placeholder='Apples'
              value={this.state.name}
              onChange={this.onInputChange}
            />
            <div>Price</div>
            $
            <input
              id='price'
              name='price'
              type='text'
              className='edit-form baloo-font'
              placeholder='00.50'
              value={this.state.price}
              onChange={this.onInputChange}
            />
            <div>Unit</div>
            <input
              id='unit'
              name='unit'
              type='text'
              className='edit-form baloo-font'
              placeholder='lb'
              value={this.state.unit}
              onChange={this.onInputChange}
            />
            <div>Quantity (optional)</div>
            <input
              id='quantity'
              name='quantity'
              type='text'
              className='edit-form baloo-font'
              placeholder='20lbs'
              value={this.state.quantity}
              onChange={this.onInputChange}
            />
            <div>Duration</div>
            <input
              id='startTime'
              name='startTime'
              type='text'
              className='edit-form baloo-font'
              placeholder='3:30PM'
              value={this.state.startTime}
              onChange={this.onInputChange}
            />
            <input
              id='endTime'
              name='endTime'
              type='text'
              className='edit-form baloo-font'
              placeholder='6:30PM'
              value={this.state.endTime}
              onChange={this.onInputChange}
            />
            <input id="submit-button" type='submit' value='SUBMIT' />
          </form>
        </div>
      </div>
    );
  }
}
