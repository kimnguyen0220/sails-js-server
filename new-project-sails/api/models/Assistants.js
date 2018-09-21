/**
 * Assistans.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    createdAt: false,
    updatedAt: false,

    id: {
      type: 'number',
      autoIncrement: true
    },

    gender: {
      type: 'number',
      required: true
    },

    firstName: {
      type: 'string',
      required: true,
    },

    lastName: {
      type: 'string',
      required: true,
    },

    email: {
      type: 'string',
      required: true,
    }

  },

};

