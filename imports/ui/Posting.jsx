import React, { Component } from 'react';
import Restaurant from '/imports/api/restaurant';

export default class Posting extends Component {
  state = {
    restaurant: {
      _id: null,
      name: null,
      address: null,
      phone: null,
      email: null
    }
  };

  componentDidMount() {
    this.fetchRestaurant();
  }

  fetchRestaurant = () => {
    const restaurantId = this.props.restaurantId
      ? this.props.restaurantId.toString()
      : '';
    let restaurantData = Restaurant.findOne({
      _id: restaurantId
    });
    this.setState({ restaurant: restaurantData });
  };

  render() {
    return (
      <div className='posting-card'>
        <div className='parent'>
          <div className='posting-name left'>
            <div className='left'>{this.props.name}</div>
            <br />
            <p className='posting-top left'>
              {this.props.price}/{this.props.priceUnit}
            </p>
            <p className='posting-top right'>{this.props.time}</p>
          </div>
          <div className='posting-bottom'>
            <p className='left'>{this.state.restaurant.name}</p>
            <p className='right'>
              {this.props.quantity}{" "}{this.props.priceUnit}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
