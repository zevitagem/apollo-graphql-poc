const {RESTDataSource} = require('apollo-datasource-rest');
const baseDatasource = require('./baseDatasource.js');

class roleDatasource extends baseDatasource {

    constructor() {
        super();
        this.initialize({});
    }

    async getRole(id) {
        return this.get(`/roles/${id}`);
    }
}

module.exports = new roleDatasource();
