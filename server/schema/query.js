const { GraphQLObjectType } = require('graphql');
const { clients, client } = require('./query/client');
const { projects, project } = require('./query/project');

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    clients,
    client,
    projects,
    project,
  },
});

module.exports = query;
