const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');

const Client = require('../../models/Client');
const ClientType = require('../types/ClientType');

const clients = {
  type: new GraphQLList(ClientType),
  resolve(parent, args) {
    return Client.find();
  },
};

const client = {
  type: ClientType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Client.findById(args.id);
  },
};

module.exports = {
  clients,
  client,
};
