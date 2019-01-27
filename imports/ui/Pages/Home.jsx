import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from '../SmallComponents/ProfileButton.jsx';
import SearchBar from '../SmallComponents/SearchBar.jsx';
import TagBar from '../SmallComponents/TagBar.jsx';
import Posting from '../Posting.jsx';
import Form from '../Form.jsx';
import GoogleAuth from '/imports/api/GoogleAuth';
import Deal from '/imports/api/deal';

export default class Home extends Component {
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

  insertDealsSeedData = () => {
    let start = new Date(new Date().setHours(15));
    let end = new Date(new Date().setHours(17));

    Deal.insert({
      name: 'Amazing Sale',
      restaurantId: this.state.userId,
      price: 35.50,
      priceUnit: 'lb',
      startTime: start,
      endTime: end,
      quantity: 42,
      description: 'Dolor sit amet'
    });
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
          restaurant={deal.restaurantId}
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
        <div className='top-image'>
          <div>
            <NavLink
              to='/home'
              className='navbar-link'
              activeClassName='activeLink'
            >
              Home
            </NavLink>
            <NavLink
              to='/providerProfile'
              className='navbar-link'
              activeClassName='activeLink'
            >
              Provider
            </NavLink>
            <NavLink
              to='/newPosting'
              className='navbar-link'
              activeClassName='activeLink'
            >
              New Posting!
            </NavLink>
          </div>
          <div className='home-profile-button-container'>
            <ProfileButton />
          </div>
          <div className='home-search-container'>
            <SearchBar />
          </div>
          <TagBar />
        </div>
        <div className='postings-container'>{this.renderPostingCards()}</div>
        <Form userIdToken={this.state.userId} />
        <GoogleAuth
          onUserLogin={this.onUserLogin}
          onUserLogout={this.onUserLogout}
        />
      </div>
    );
  }
}
