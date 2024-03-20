/* jshint node: true */
/* jshint esnext: true */
'use strict';

const { AxException, eDic, mongooseDB, dataTypes } = require('../../general/_general');

class SecondaryControllerBase {
  constructor(userProfile) {
    this.user = { ...userProfile.user, profile: userProfile, language: userProfile.language || 'EN' };
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }
}

module.exports = SecondaryControllerBase;