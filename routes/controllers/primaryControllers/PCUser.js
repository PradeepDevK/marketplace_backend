/* jshint node: true */
/* jshint esnext: true */
'use strict';

const { AxException, AxActionShowMessage, eDic, mongooseDB } = require('../../general/_general');
const userSchema = require('../../schemas/userSchema');
const PrimaryControllerBase = require('./PrimaryControllerBase');

class PCUser extends PrimaryControllerBase {
  constructor(userProfile) {
    super(userProfile);
  }

  async save() {
    
  }
}

module.exports = PCUser;