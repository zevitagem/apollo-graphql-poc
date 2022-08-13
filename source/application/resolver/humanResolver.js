const {GraphQLScalarType} = require('graphql');

const humanResolver = {
    Human: {
        __resolveType(human, context, info) {
            if (context.dataSources.human.isDeveloper(human)) {
                return 'Developer';
            }
            if (human.active) {
                return 'User';
            }
            return null; // GraphQLError is thrown
        },
    },
    RolesType: {
        JUNIOR: "JUNIOR",
        PLENO: "PLENO",
        SENIOR: "SENIOR",
        STAFF: "STAFF",
        PRINCIPAL: "PRINCIPAL"
    },
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'string de data e hora no formato ISO-8601',
        serialize: (value) => value.toISOString(),
        parseValue: (value) => new Date(value),
        parseLiteral: (ast) => new Date(ast.value)
    }),
    Query: {
        humans: (root, args, { dataSources }) => dataSources.human.getHumans(),
        human: (root, { id }, { dataSources }) => dataSources.human.getHuman(id)
    },
    Mutation: {
        addHuman: async (root, { human }, { dataSources }) => dataSources.human.addHuman(human)
    }
};

module.exports = humanResolver;
