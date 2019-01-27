import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../SmallComponents/NavBar.jsx';
import GoogleAuth from '/imports/api/GoogleAuth';
import Deal from '/imports/api/deal';
import Posting from '../Posting.jsx';
import { NavLink } from 'react-router-dom';

export default class ProviderProfile extends Component {

  state = {
    userId: null,
    deals: []
  };

  onUserLogin = idToken => {
    this.setState({
      userId: idToken
    });

    this.fetchDeals();
  };

   onUserLogout = () => {
    this.setState({
      userId: null
    });
  };

  fetchDeals = () => {
    const data = Deal.find().fetch();

    this.setState({
      deals: data
    });
  };

  renderPostingCards = () =>
    this.state.deals.map(deal => {
      return (
        <Posting
          key={deal._id}
          name={deal.name}
          restaurantId={deal.restaurantId}
          price={deal.price}
          priceUnit={deal.priceUnit}
          startTime={deal.startTime}
          endTime={deal.endTime}
          quantity={deal.name}
          description={deal.description}
        />
      );
    });

  render() {
    return (
      <div>
        <NavBar />
        <div className='page-width'>
          <div id="restaurant-info-card">
            <div id="restaurant-pic">
            </div>
            <div id="store-info-box">
            <div className="store-name">General store</div>
            <div className="store-address">
              <img className="store-address-pointer" src="/location.png"/>
              3585 Grandview Highway
              Vancouver, BC, V5M 2G7
            </div>
            <div className="store-followers">
              <img className="follower-img" src="/followers.png"/>
              200 Followers
            </div>
            </div>
            <div id="manage-discounts">
              Manage Discounts
            </div>
            <NavLink to="/newPosting" id="add-discount">
              <span className="add-discount-text">+ Add Discount</span>
            </NavLink>
          </div>
          <div id="postings-div">
          <div>{this.renderPostingCards()}</div>
          </div>
        </div>
        <GoogleAuth
          className="hidden"
          onUserLogin={this.onUserLogin}
          onUserLogout={this.onUserLogout}
        />
      </div>
    );
  }
}
