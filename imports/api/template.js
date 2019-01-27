import { Mongo } from 'meteor/mongo';

export default Template = new Mongo.Collection('template');

Template.schema = new SimpleSchema({
  restaurantId: { type: String },
  name: { type: String },
  price: { type: Number }
});

// this Template schema can potentially contain photo
