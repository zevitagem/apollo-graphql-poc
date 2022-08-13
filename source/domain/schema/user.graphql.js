const { gql } = require('apollo-server')

const userSchema = gql `
scalar DateTime

  type User {
    id: ID!
    nome: String!
    ativo: Boolean!
    email: String
    role: Role!
    createdAt: DateTime
  }

  input UserInput {
    nome: String
    ativo: Boolean
    email: String
    role: RolesType
    createdAt: DateTime
  }

  type Role {
    id: ID!
    type: RolesType!
  }

  enum RolesType {
    ESTUDANTE
    DOCENTE
    COORDENACAO
  }

  type Query {
    users: [User]
    user(id: ID!): User!
  }

  type Mutation {
    adicionaUser(user: UserInput): RespostaPadraoCriacao!
  }

  interface Resposta {
    code: Int!
    mensagem: String!
  }

  type RespostaPadraoCriacao implements Resposta {
    code: Int!
    mensagem: String!
    userCriado: User!
  }

`

module.exports = userSchema
