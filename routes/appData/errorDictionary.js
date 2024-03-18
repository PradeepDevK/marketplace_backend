/* jshint node: true */
/* jshint esnext: true */
'use strict';

const dictionaryEN = require('./ErrorDictionary_EN');

const errorDictionaryData = {
  EN: dictionaryEN
};


class ErrorDictionary {
  static s(language, key, params) {
    language = this.normalizeLanguage(language);
    return !errorDictionaryData[language][key] ? `-${key}-` : !params ? errorDictionaryData[language][key] : errorDictionaryData[language][key].replace(/\{\d\}/g, (val) => { return params[parseFloat(val.match(/d/g)[0])]; });
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

module.exports = { eDic: ErrorDictionary };