module.exports = {


  friendlyName: 'Assistant delete',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    try {
      const deleteAssistant = await Assistants.destroy({id: inputs.id}).fetch();
      sails.log('delete success');
      return exits.success(deleteAssistant);
    }
    catch(error) {
      return exits.error();
    }
  }


};
