/* jshint node: true */
/* jshint esnext: true */
'use strict';

const jwtAuthz = require('express-jwt-authz');
const checkJwt = require('./jwtCheckConfig');
const router = require('express').Router();

/**POST Methods */

/**
 * @openapi
 * '/api/userToken/':
 *  post:
 *     tags:
 *     - User Token
 *     summary: User Token
 *     security:
 *      - bearerAuth: []
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
    
});


/**GET Methods */


module.exports = router;