module.exports = {


  friendlyName: 'Create',


  description: 'Create assistant.',


  inputs: {
    id: {
      type: 'string',
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const assistant = await Assistant.findOne({id: inputs.id});
      console.log(assistant);

      if(!assistant) {
        return exits.assistantNotFound();
      }

      return exits.success(assistant);
    } catch (error) {
      console.log(error);
      exits.error(error);
    }

    return exits.success();

  }


};
