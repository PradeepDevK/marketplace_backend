/* jshint node: true */
/* jshint esnext: true */
'use strict';

const { AxException, AxActionShowMessage, eDic, mongooseDB, dic } = require('../../general/_general');
const SecondaryControllerBase = require('./SecondaryControllerBase');
const { requiredFields } = require('../../utils');

class SCUser extends SecondaryControllerBase {
  constructor(userProfile) {
    super(userProfile);
  }

  async new() {
    
  }
}

module.exports = SCUser;