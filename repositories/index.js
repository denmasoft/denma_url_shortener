const UrlRepository = require('./UrlRepository');

const MongoDbUrlRepository = require('../repositories_interfaces/mongodb/MongoDbUrlRepository');

const mongoDbUrlRepository = new MongoDbUrlRepository();

const urlRepository = new UrlRepository(mongoDbUrlRepository);

module.exports = { urlRepository };
