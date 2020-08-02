const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    friends: [User!]!
  }
  extend type Mutation {
    friendRequest(userId: ID!): String!
    friendAccept(userId: ID!): String!
  }
`;
