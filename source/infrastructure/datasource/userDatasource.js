const {RESTDataSource} = require('apollo-datasource-rest')
const baseDatasource = require('./baseDatasource.js')

class userDatasource extends baseDatasource {

    async getUsers() {
        const users = await this.get('/users')
        return users.map(async user => ({
                id: user.id,
                nome: user.nome,
                email: user.email,
                ativo: user.ativo,
                role: await this.get(`/roles/${user.role}`)
            }))
    }

    async getUser(id) {
        const user = await this.get(`/users/${id}`)
        user.role = await this.get(`/roles/${user.role}`)
        return user
    }

    async adicionaUser(user) {
        const users = await this.get('/users')
        user.id = users.length + 1
        const role = await this.get(`roles/by_type/${user.role}`)
        const createdUser = await this.post('users', {...user, role: role.id})

        return ({
            ...this.respostaCustom,
            userCriado: {
                ...createdUser,
                role: role
            }
        })
    }
}

module.exports = userDatasource