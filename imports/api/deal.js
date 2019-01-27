import { Mongo } from 'meteor/mongo';

export default (Deal = new Mongo.Collection('deal'));

Deal.schema = new SimpleSchema({
  name: { type: String },
  menuId: { type: String },
  discount: { type: Number },
  validUntil: { type: Date },
  quantity: { type: String, optional: true }
});
