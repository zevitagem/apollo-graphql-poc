const {ApolloServer, gql} = require('apollo-server');
const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const {typeDefs, resolvers, dataSources} = require('./application/processor');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    csrfPrevention: true,
    cache: 'bounded',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
     **/
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({embed: true})
    ]
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
