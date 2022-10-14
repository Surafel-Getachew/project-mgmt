const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');

const Project = require('../../models/Project');
const ProjectType = require('../types/ProjectType');

const StatusType = new GraphQLEnumType({
  name: 'Status',
  values: {
    new: { value: 'Not Started' },
    progress: { value: 'In Progress' },
    completed: { value: 'Completed' },
  },
});

const addProject = {
  type: ProjectType,
  args: {
    clientId: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    status: {
      type: StatusType,
      defaultValue: 'new',
    },
  },
  resolve(parent, args) {
    return Project.create({
      clientId: args.clientId,
      name: args.name,
      description: args.description,
      status: args.status,
    });
  },
};

const deleteProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    return Project.findByIdAndDelete(args.id);
  },
};

const updateProject = {
  type: ProjectType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: StatusType },
  },
  resolve(parent, args) {
    return Project.findByIdAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          description: args.description,
          status: args.status,
        },
      },
      { new: true }
    );
  },
};

module.exports = {
  addProject,
  deleteProject,
  updateProject,
};
