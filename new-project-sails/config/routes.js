/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const api = 'api';

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/homepage'
  },

  //'GET /assistant' : { view: 'a/list'}

  'GET /test1' : 'TestController.async',
  'GET /test/list' : 'TestController.getName',
  'GET /test/list/:id' : 'TestController.getUserId',

  'GET /assistant/activate/:id' : 'assistant/activate',
  'GET /demo1/demo/:id' : 'demo1/demo',
  'POST /demo1': 'demo1/create',


  //'GET /assistants' : 'assistant/assistant-list',
  'GET /assistants/item/:id' : 'assistant/assistant-list',
  'POST /assistants' : 'assistant/assistant-create',
  'PUT /assistants/edit' : 'assistant/assistant-update',
  'DELETE /assistants/:id' : 'assistant/assistant-delete'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/




};
