/**
 * Assistant.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {


  attributes: {
    createdAt: false,
    updatedAt: false,
    userName: {
      type: 'string',
      required: true,
    },

    email: {
      type: 'string',
      required: true
    },

    sex: {
      type: 'string',
    }
  },

};


