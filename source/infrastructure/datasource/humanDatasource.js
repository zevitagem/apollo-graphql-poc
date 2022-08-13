const {RESTDataSource} = require('apollo-datasource-rest');
const baseDatasource = require('./baseDatasource.js');
const roleDatasource = require('./roleDatasource.js');
const roleCache = require('../cache/roleCache.js');

class humanDatasource extends baseDatasource {

    async getHumans() {
        const humans = await this.get('/humans')

        let mapped = humans.map(async human => {

            if (this.isDeveloper(human)) {
                human.role = roleCache.get(human.role);
            }

            return human;
        });

        return mapped;
    }

    isDeveloper(human) {
        return (human.role);
    }

    async getHuman(id) {
        const human = await this.get(`/humans/${id}`);
        human.role = roleCache.get(human.role);
        return human;
    }

    async addHuman(human) {
        const humans = await this.get('/humans');
        human.id = humans.length + 1;

        const role = await this.get(`roles/by_type/${human.role}`);
        const createdHuman = await this.post('humans', {...human, role: role.id});

        return ({
            ...this.respostaCustom,
            human: {
                ...createdHuman,
                role: role
            }
        });
    }
};

module.exports = humanDatasource;
