const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController'); 
const SessionController = require('./controllers/SessionController'); 

const routes = express.Router();

/**
 * Routes / Resources
 */

/**
 * Methods HTTP
 * 
 * GET: Search an information in the backend
 * POST: Create an information in the backend
 * PUT: Change an information in the backend
 * DELETE: Delete an information in the backend
 */

 /**
  * Type paramaters:
  * 
  * Query Params: Named parameters sent on the route after "?" (Filters, Pagination).
  * Route Params: Paramaters used to identify resources.
  * Request Body: Used for create or change resources.
  */

  /**
   * SQL: MySQL, SQLite, Postgre, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, etc.
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;