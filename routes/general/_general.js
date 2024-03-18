/* jshint node: true */
/* jshint esnext: true */
'use strict';

const mongooseDB = require('./connectionMongoDB');
const utils = require('../utils');
const { eDic } = require('../appData/errorDictionary');
const { dictionary } = require('../appData/dictionary');


const { AxException, AxActionShowMessage, diacriticSensitiveRegex, mongoPaginationResponse, mongoCaseSensitiveRegex } = require('../general/general');

module.exports = {
  mongooseDB,
  utils,
  AxException,
  AxActionShowMessage,
  diacriticSensitiveRegex,
  mongoPaginationResponse,
  mongoCaseSensitiveRegex,
  eDic,
  dic: dictionary,
};