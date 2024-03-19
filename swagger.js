/* jshint node: true */
/* jshint esnext: true */
'use strict';

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Marketplace Second-Hand Goods API',
      description:
        'API endpoints for a marketplace second-hand goods services documented on swagger',
      contact: {
        name: 'Achilles',
        email: 'info@achilles.com',
        url: 'https://github.com/PradeepDevK/swagger_nodejs_expressjs',
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:8000/',
        description: 'Local server',
      },
    ],
  },
  // looks for configuration in specified directories
  apis: ['./routes/*.js', './routes/appData/dictionary.js'],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

module.exports = swaggerDocs;