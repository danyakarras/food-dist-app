import { Mongo } from 'meteor/mongo';

export default Menu = new Mongo.Collection('menu');

Menu.schema = new SimpleSchema({
  restaurantId: { type: String },
  name: { type: String },
  price: { type: Number }
});
