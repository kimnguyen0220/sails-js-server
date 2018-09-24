module.exports = {


  friendlyName: 'Assistant update',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true
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


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const updateAssistant = await Assistants.update({id: inputs.id})
        .set({
              gender: inputs.gender,
              firstName: inputs.firstName,
              lastName: inputs.lastName,
              email: inputs.email
        })
        .fetch();

      console.log(updateAssistant);
      return exits.success(updateAssistant);
    }

    catch(error) {
      console.log(error);
      exits.error();
    }

    return exits.success();
  }


};
