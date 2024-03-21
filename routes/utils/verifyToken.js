/* jshint node: true */
/* jshint esnext: true */
'use strict';

const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_PRIVATE_KEY, REFRESH_TOKEN_PRIVATE_KEY } = process.env;

const verifyToken = async(user) => {
  const privateKey = REFRESH_TOKEN_PRIVATE_KEY;
};

module.exports = verifyToken;