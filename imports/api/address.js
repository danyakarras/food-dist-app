import { Mongo } from 'meteor/mongo';

export default Address = new Mongo.Collection('address');

Address.schema = new SimpleSchema({
  line1: { type: String },
  line2: { type: String, optional: true },
  city: { type: String },
  province: { type: String },
  postalCode: { type: String }
});
