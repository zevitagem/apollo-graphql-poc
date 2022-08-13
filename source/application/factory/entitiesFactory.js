const humanSchema = require('../../domain/schema/human.graphql');
const humanResolver = require('../resolver/humanResolver');
const humanDatasource = require('../../infrastructure/datasource/humanDatasource');

module.exports = new class {
    createHuman() {
        return {
            schema: humanSchema,
            resolver: humanResolver,
            dataSource: humanDatasource
        };
    }
};
