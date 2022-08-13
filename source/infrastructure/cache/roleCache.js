const roleDatasource = require('../datasource/roleDatasource.js')

class roleCache {

    constructor() {
        this.data = new Object();
    }

    async get(id) {

        if (!this.data[id]) {
            this.data[id] = await roleDatasource.getRole(id);
        }

        return this.data[id];
    }
}

module.exports = new roleCache;
