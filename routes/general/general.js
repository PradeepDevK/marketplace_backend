/* jshint node: true */
/* jshint esnext: true */
'use strict';
const _ = require('lodash');

const diacriticSensitiveRegex = (string = '') => {
  return (
    string
      // eslint-disable-next-line no-useless-escape
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      .replace(/[aáàäAÀÁÄ]/g, '[aáàäAÀÁÄ]')
      .replace(/[eéëEÉË]/g, '[eéëEÉË]')
      .replace(/[iíïIÍÏ]/g, '[iíïIÍÏ]')
      .replace(/[oóöòOÓÒÖ]/g, '[oóöòOÓÒÖ]')
      .replace(/[nñNÑ]/g, '[nñNÑ]')
      .replace(/[uüúùUÚÙÜ]/g, '[uüúùUÚÙÜ]')
  );
};

const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

class AxActionBase {
  constructor(type) {
    this.type = type;
  }
}

class AxActionShowMessage extends AxActionBase {
  constructor(message, type = 'Error') {
    super('showmessage');
    this.message = message;
    this.messageType = type;
  }
}

class AxException {
  constructor(code, systemError, AxActions = []) {
    this.httpCode = code;
    this.idError = guid();
    this.systemError = systemError;
    if (typeof AxActions === 'string') AxActions = [new AxActionShowMessage(AxActions)];
    this.axActions = [AxActions];
  }
}

const mongoPaginationResponse = ({ dbDocs, pageNo, limit }) => {
  const { data, pagination } = dbDocs;

  const totalCount = _.get(pagination, '0.totalCount', data.length);
  const totalPages = limit ? Math.ceil(totalCount / limit) : null;
  const hasNextPage =
    totalPages && pageNo && pageNo < totalPages ? true : false;

  return {
    data,
    hasNextPage,
    totalCount,
    totalPages,
    limit: limit || data.length,
    currentPage: pageNo || 1,
  };
};


const mongoCaseSensitiveRegex = (array = []) => {
  if (!array.length) return [];

  const arrayOfStrings = array;

  // Use map to add regex start and end anchors to each string
  const arrayOfRegex = arrayOfStrings.map(
    (str) => new RegExp(`^${str.trim()}$`, 'i')
  );

  return arrayOfRegex;
};


const general = {
  diacriticSensitiveRegex,
  guid,
  AxException,
  AxActionShowMessage,
  mongoPaginationResponse,
  mongoCaseSensitiveRegex
};

module.exports = general;
