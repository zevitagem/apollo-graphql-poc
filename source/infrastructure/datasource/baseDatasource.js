const {RESTDataSource} = require('apollo-datasource-rest')

class baseDatasource extends RESTDataSource {
    constructor() {

        super()

        if (this.constructor == baseDatasource) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.baseURL = 'http://node-api:8080'
        this.respostaCustom = {
            code: 201,
            mensagem: "operação feita com sucesso"
        }
    }
}

module.exports = baseDatasource