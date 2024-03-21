/* jshint node: true */
/* jshint esnext: true */
'use strict';

const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_PRIVATE_KEY, REFRESH_TOKEN_PRIVATE_KEY } = process.env;

const generateTokens = async (user) => {
  const payload = { id: user.id, role: user.role };
  
  const accessToken = jwt.sign(
    payload,
    ACCESS_TOKEN_PRIVATE_KEY,
    { expiresIn: '14m' }
  );

  const refreshToken = jwt.sign(
    payload,
    process.env.REFRESH_TOKEN_PRIVATE_KEY,
    { expiresIn: '7d' }
  );
};

module.exports = generateTokens;