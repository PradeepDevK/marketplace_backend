/* jshint node: true */
/* jshint esnext: true */
'use strict';

const jwtAuthz = require('express-jwt-authz');
const checkJwt = require('./jwtCheckConfig');
const router = require('express').Router();

/** POST Methods */

/**
 * @openapi
 * '/api/login/register':
 *  post:
 *     tags:
 *     - Login
 *     summary: Signup new user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                default: ''
 *              password:
 *                type: string
 *                default: ''
 *              email:
 *                type: string
 *                default: ''  
 *              mobile:
 *                type: string
 *                default: '' 
 *     responses:
 *      200:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post('/register', async (req, res, next) => {
  try {
    res.status(200).send({ status: true, message: 'success'});
  } catch (e) {
    errorHandler(e, req, res);
  }
});


/**
 * @openapi
 * '/api/login/':
 *  post:
 *     tags:
 *     - Login
 *     summary: Login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *                default: ''
 *              password:
 *                type: string
 *                default: ''
 *     responses:
 *      200:
 *        description: Logged In Sucessfully
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.post('/', async (req, res, next) => {
  try {
    res.status(200).send({ status: true, message: 'success'});
  } catch (e) {
    errorHandler(e, req, res);
  }
});

/**
 * Error handler for the catch block
 * @param {*} e 
 * @param {*} req 
 * @param {*} res 
 */
function errorHandler(e, req, res) {
  console.log({ exception: e, headers: req.headers, body: req.body });
  res.status(e.httpCode || 500).send({ status: false, data: [], ...e });
}

module.exports = router;