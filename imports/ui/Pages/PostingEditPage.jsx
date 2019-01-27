import React, { Component } from 'react';

export default class PostingEditPage extends Component {
	state = { 	name: '', 
				price: '', 
				unit: '',
				quantity: '',
				startTime: '',
				endTime: '' };

	onInputChange = event => {
	    let key = event.currentTarget.name;
	    let obj = {};
	    obj[key] = event.target.value;

	    this.setState(obj);
	  };

	onFormSubmit = event => {
		event.preventDefault();

		Deal.insert({
			_id: this.props.userIdToken,
			name: this.state.name,
			email: this.state.email,
			phone: this.state.phone,
			createdAt: new Date()
		});

		this.clearForm();
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
        	<label>Name</label>
			<input
				id='name'
				name='name'
				type='text'
				className='baloo-font'
				placeholder='Apples'
				value={this.state.name}
				onChange={this.onInputChange}
			/>
			<label>Price</label>
			$<input
				id='price'
				name='price'
				type='text'
				className='baloo-font'
				placeholder='00.50'
				value={this.state.price}
				onChange={this.onInputChange}
			/>
			<label>Unit</label>
			<input
				id='unit'
				name='unit'
				type='text'
				className='baloo-font'
				placeholder='lb'
				value={this.state.unit}
				onChange={this.onInputChange}
			/>
			<label>Quantity (optional)</label>
			<input
				id='quantity'
				name='quantity'
				type='text'
				className='baloo-font'
				placeholder='20lbs'
				value={this.state.quantity}
				onChange={this.onInputChange}
			/>
			<label>Duration</label>
			<input
				id='startTime'
				name='startTime'
				type='text'
				className='baloo-font'
				placeholder='3:30PM'
				value={this.state.startTime}
				onChange={this.onInputChange}
			/>
			<input
				id='endTime'
				name='endTime'
				type='text'
				className='baloo-font'
				placeholder='6:30PM'
				value={this.state.endTime}
				onChange={this.onInputChange}
			/>
			<input type='submit' value='SUBMIT' />
        </form>
      </div>
    );
  }
}
