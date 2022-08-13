const {GraphQLScalarType} = require('graphql')

const userResolver = {
    RolesType: {
        ESTUDANTE: "ESTUDANTE",
        DOCENTE: "DOCENTE",
        COORDENACAO: "COORDENACAO"
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),
    Query: {
        users: (root, args, { dataSources }) => dataSources.userDatasource.getUsers(),
        user: (root, { id }, { dataSources }) => dataSources.userDatasource.getUser(id)
    },
    Mutation: {
        adicionaUser: async (root, { user }, { dataSources }) => dataSources.userDatasource.adicionaUser(user)
    }
}

module.exports = userResolver