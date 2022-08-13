const {RESTDataSource} = require('apollo-datasource-rest')

class roleDatasource extends RESTDataSource {

    async getRole(id) {
        return this.get(`/roles/${id}`)
    }
}

module.exports = roleDatasource