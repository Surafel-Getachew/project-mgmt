const { GraphQLObjectType } = require('graphql');
const { addClient, deleteClient } = require('./mutation/client');
const {
  addProject,
  updateProject,
  deleteProject,
} = require('./mutation/project');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // client mutation
    addClient,
    deleteClient,
    // project mutation
    addProject,
    updateProject,
    deleteProject,
  },
});

module.exports = mutation;
