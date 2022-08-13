const { gql } = require('apollo-server')

const humanSchema = gql `
  scalar DateTime

  interface Human {
    id: ID!
    name: String!
    email: String!
  }

  type Developer implements Human {
    id: ID!
    name: String!
    email: String!
    role: Role!
  }

  type User implements Human {
    id: ID!
    name: String!
    email: String!
    active: Boolean!
    createdAt: DateTime
  }

  input HumanInput {
    name: String
    active: Boolean
    email: String
    role: RolesType
    createdAt: DateTime
  }

  type Role {
    id: ID!
    type: RolesType!
  }

  enum RolesType {
    JUNIOR
    PLENO
    SENIOR
    STAFF
    PRINCIPAL
  }

  type Query {
    humans: [Human]
    human(id: ID!): Human!
  }

  type Mutation {
    addHuman(human: HumanInput): DefaultCreatedResponse!
  }

  interface Response {
    code: Int!
    mensagem: String!
  }

  type DefaultCreatedResponse implements Response {
    code: Int!
    mensagem: String!
    human: Human!
  }
`

module.exports = humanSchema
