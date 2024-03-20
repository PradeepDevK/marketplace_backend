/* jshint node: true */
/* jshint esnext: true */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, default: '' },
  picture: { type: String, default: '' },
  mobilePhone: { type: String, default: '' },
  role: { type: String, required: true },
  active: { type: Boolean, default: true },
  visible: { type: Boolean, default: true },
  lastActivity: { type: Date, default: null },
  dateCreated: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
});

//Index Creation
userSchema.index({ id: 1 }, { background: true });
userSchema.index({ id: 1, active: 1, visible: 1 }, { background: true });
userSchema.index({ id: 1, lastActivity: 1 }, { background: true });

module.exports = userSchema;