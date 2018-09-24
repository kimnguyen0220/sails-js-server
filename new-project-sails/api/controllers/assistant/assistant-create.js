module.exports = {


  friendlyName: 'Assistant create',


  description: '',


  inputs: {
    // id: {
    //   type: 'number',
    //   required: true
    // },
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


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const assistant = await Assistants.create({
        gender: inputs.gender,
        firstName: inputs.firstName,
        lastName: inputs.lastName,
        email: inputs.email
      }).fetch();

      console.log(assistant);
      return exits.success(assistant);
    }
    catch (error) {
      return exits.error();
    }
  }


};
