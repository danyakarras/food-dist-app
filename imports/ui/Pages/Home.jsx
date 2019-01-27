import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from '../SmallComponents/ProfileButton.jsx';
import SearchBar from '../SmallComponents/SearchBar.jsx';
import TagBar from '../SmallComponents/TagBar.jsx';
import Posting from '../Posting.jsx';
import GoogleAuth from '/imports/api/GoogleAuth';
import Deal from '/imports/api/deal';

export default class Home extends Component {
  state = {
    userId: null,
    restaurants: [],
    deals: []
  };

  onUserLogin = idToken => {
    this.setState({
      userId: idToken
    });

    this.fetchDeals();
  };

  onRestaurantSearch = searchTerm => {
    const searchResult = Restaurant.find({
      name: { $regex: '.*' + searchTerm + '.*' }
    }).fetch();

    this.setState({ restaurants: searchResult });
    this.updateDeals();
  };

  updateDeals = () => {
    let searchResult = [];

    this.state.restaurants.forEach(restaurant => {
      let found = Deal.find({
        restaurantId: restaurant._id
      }).fetch();

      Array.prototype.push.apply(searchResult, found);
    });

    this.setState({ deals: searchResult });
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
        <div className='top-image'>
          <div className="home-navbar-container">
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
            <ProfileButton />
          </div>
          <img id="logo-image" src="/LOGOS-04.png" />
          <div className='home-search-container'>
            <SearchBar onRestaurantSearch={this.onRestaurantSearch} />
          </div>
          <TagBar />
        </div>
        <div className='postings-container'>{this.renderPostingCards()}</div>
        <GoogleAuth
          onUserLogin={this.onUserLogin}
          onUserLogout={this.onUserLogout}
        />
      </div>
    );
  }
}
