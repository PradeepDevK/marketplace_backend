/* jshint node: true */
/* jshint esnext: true */
'use strict';

const _ = require('lodash');


const requiredFields = (input = null, fields = []) => {
  if (!input) return false;
  return fields.reduce((retValue, field) => {
    if (!_.has(input, field) || _.isEmpty(input[field])) retValue.push(field);
    return retValue;
  }, []);
};

module.exports = {
  requiredFields
};