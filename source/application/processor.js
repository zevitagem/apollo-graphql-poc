const { mergeTypeDefs } = require('@graphql-tools/merge')

const entitiesFactory = require('./factory/entitiesFactory.js')

userConfig = entitiesFactory.createUser();
    userSchema = userConfig.schema;
    userResolver = userConfig.resolver;
    userDatasource = userConfig.datasource;
    
const typeDefs = mergeTypeDefs([userSchema])
const resolvers = [userResolver]

const dataSources = () => ({
  userDatasource: new userDatasource()
})

module.exports = {
    typeDefs,
    resolvers,
    dataSources
}