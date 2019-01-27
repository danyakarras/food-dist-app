import React, { Component } from 'react';

export default class PostingEditPage extends Component {
	state = { 	name: '', 
				email: '', 
				phone: '' };

	onInputChange = event => {
	    let key = event.currentTarget.name;
	    let obj = {};
	    obj[key] = event.target.value;

	    this.setState(obj);
	  };

	onSubmit = () => {
		event.preventDefault();
	    console.log(this.state);
	};

  render() {
    return (
      <div className="page-width">
        <h1>Hello World</h1>
        <div id="posting-image">
        	<img src='/gala-apples.jpg'/>
        </div>
        <form id="posting-create-form" onSubmit={this.onSubmit}>
          <input
            id='name'
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}
