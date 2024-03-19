/* jshint node: true */
/* jshint esnext: true */
'use strict';

const express = require('express');
const router = express.Router();
const dictionaryEN = require('./dictionaryEN');

const DictionaryData = {
  EN: dictionaryEN
};

class dictionary {
  constructor() {
    this.data = {};
  }

  s(key, params) {
    return !this.data[key] ? `-${key}-` : !params ? this.data[key] : this.data[key].replace(/\{\d\}/g, (val) => { return params[parseFloat(val.match(/\d/g)[0])]; });
  }

  set(language) {
    language = language ? language.toLowerCase() : 'en';
    this.data = language === 'en' || language === 'english' ? dictionaryEN : dictionaryEN;
  }

  get(language) {
    if (language) this.set(language);
    return this.data;
  }

  static ss(language, key, params) {
    language = this.normalizeLanguage(language);
    return !DictionaryData[language][key] ? `-${key}-` : !params ? DictionaryData[language][key] :        DictionaryData[language][key].replace(/\{\d\}/g, (val) => { return params[parseFloat(val.match(/\d/g)[0])]; });
  }

  static normalizeLanguage(language) {
    if (language === undefined || language === null || language === '') return 'EN';
    switch (language.toUpperCase()) {
      case 'ENGLISH':
      case 'EN':
        return 'EN';
      default:
        return 'EN';
    }
  }
}

/** GET Methods */

/**
 * @openapi
 * '/api/dictionary':
 *  get:
 *     tags:
 *     - Dictionary
 *     summary: Get dictionary data
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
*/
router.get('/', (req, res, next) => {
  res.status(200).send({ status: true, data: new dictionary().get(req.query.language) });
});

module.exports = { apiDictionary: router, dictionary: dictionary };