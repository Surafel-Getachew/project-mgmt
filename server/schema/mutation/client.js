const { GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');

const ClientType = require('../types/ClientType');
const Client = require('../../models/Client');
const Project = require('../../models/Project');

const addClient = {
  type: ClientType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phone: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve(parent, args) {
    return Client.create({
      name: args.name,
      email: args.email,
      phone: args.phone,
    });
  },
};

const deleteClient = {
  type: ClientType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    Project.find({ clientId: args.id }).then((projects) => {
      projects.forEach((project) => {
        project.remove();
      });
    });
    return Client.findByIdAndDelete(args.id);
  },
};

module.exports = {
  addClient,
  deleteClient,
};
