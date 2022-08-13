const {mergeTypeDefs} = require('@graphql-tools/merge');

const entitiesFactory = require('./factory/entitiesFactory.js');

var entities = ['Human'],
        schemas = new Array(),
        resolvers = new Array(),
        tempDataSources = new Object();

entities.forEach(function (entity) {
    config = entitiesFactory[`create${entity}`]();

    schemas.push(config.schema);
    resolvers.push(config.resolver);
    tempDataSources[entity] = config.dataSource;
});

const typeDefs = mergeTypeDefs(schemas);

const dataSources = () => ({
    human: new tempDataSources['Human']
});

module.exports = {
    typeDefs,
    resolvers,
    dataSources
};
