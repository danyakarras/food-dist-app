import { Mongo } from 'meteor/mongo';
import AddressSchema from './address';

export default Restaurant = new Mongo.Collection('restaurant');

Restaurant.schema = new SimpleSchema({
  name: { type: String },
  address: {
    type: AddressSchema
  },
  phone: { type: String },
  email: { type: String }
});
