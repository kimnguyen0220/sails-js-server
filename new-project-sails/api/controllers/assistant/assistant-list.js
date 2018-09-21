module.exports = {


  friendlyName: 'Assistant list',


  description: '',


  inputs: {
    id: {
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      description: 'Success',
    },

    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'fails'
    }
  },


  fn: async function (inputs, exits) {

    try {
      const item = await Assistant.find({id: inputs.id});
      console.log(item);
      if(!item) {
        return exits.notFound.responseType;
      }

      return exits.success(item);
    }
    catch(error) {
      console.log(error);
      exits.error();
    }

    return exits.success();

  }


};