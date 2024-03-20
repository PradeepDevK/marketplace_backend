/* jshint node: true */
/* jshint esnext: true */
'use strict';

const jwtAuthz = require('express-jwt-authz');
const checkJwt = require('./jwtCheckConfig');
const router = require('express').Router();


module.exports = router;