const userSchema = require('../../domain/schema/user.graphql')
const userResolver = require('../resolver/userResolver')
const userDatasource = require('../../infrastructure/datasource/userDatasource')

module.exports = new class {
    createUser() {
        return {
            schema: userSchema,
            resolver: userResolver,
            datasource: userDatasource
        }
    }
}
