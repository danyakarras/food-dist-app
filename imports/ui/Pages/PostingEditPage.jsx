import React, { Component } from 'react';
import Deal from '/imports/api/deal';
import NavBar from '../SmallComponents/NavBar.jsx';
import { NavLink } from 'react-router-dom';
import './newPosting.css';

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
            <div className='w-100'>
              <label>Name</label>
              <input
                id='name'
                name='name'
                type='text'
                className='baloo-font edit-form input-text'
                placeholder='Apples'
                value={this.state.name}
                onChange={this.onInputChange}
              />
            </div>
            <div className='w-70'>
              <label>Price / Unit</label>
              <span className="rando-text no-left-padding">$</span>
              <input
                id='price'
                name='price'
                type='text'
                className='baloo-font edit-form input-text w-45'
                placeholder='00.50'
                value={this.state.price}
                onChange={this.onInputChange}
              />
              <span className="rando-text">/</span>
              <input
                id='unit'
                name='unit'
                type='text'
                className='baloo-font edit-form input-text w-25'
                placeholder='lb'
                value={this.state.unit}
                onChange={this.onInputChange}
              />
            </div>
            <div className='w-45'>
              <label>Quantity (optional)</label>
              <input
                id='quantity'
                name='quantity'
                type='text'
                className='baloo-font edit-form input-text'
                placeholder='20lbs'
                value={this.state.quantity}
                onChange={this.onInputChange}
              />
            </div>
            <div className='w-100'>
              <label>Duration</label>
              <input
                id='startTime'
                name='startTime'
                type='text'
                className='baloo-font edit-form input-text w-25'
                placeholder='3:30PM'
                value={this.state.startTime}
                onChange={this.onInputChange}
              />
              <span className="rando-text">-</span>
              <input
                id='endTime'
                name='endTime'
                type='text'
                className='baloo-font edit-form input-text w-25'
                placeholder='6:30PM'
                value={this.state.endTime}
                onChange={this.onInputChange}
              />
            </div>
            <input id="submit-button" type='submit' value='Publish Discount' />
          </form>
        </div>
      </div>
    );
  }
}
