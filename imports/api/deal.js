import { Mongo } from 'meteor/mongo';

export default Deal = new Mongo.Collection('deal');

Deal.schema = new SimpleSchema({
  name: { type: String },
  restaurantId: { type: String },
  price: { type: Number },
  priceUnit: { type: String },
  validUntil: { type: Date },
  quantity: { type: String, optional: true }
});
