/* jshint node: true */
/* jshint esnext: true */
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userTokenSchema = new Schema({
  userId: { type: String, required: true },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now,  expires: 7 * 86400, }, // 30 days 
});

userTokenSchema.index({ userId: 1 }, { background: true });


module.exports = userTokenSchema;