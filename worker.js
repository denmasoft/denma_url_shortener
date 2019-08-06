const SCWorker = require('socketcluster/scworker');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
class Worker extends SCWorker {
  run() {
    const { httpServer } = this;

    mongoose.Promise = global.Promise;
    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);
    mongoose.connect(config.mongodbUrl, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
    // eslint-disable-next-line no-console
    console.log('   >> Worker PID:', process.pid);
    httpServer.on('request', app);
  }
}
// eslint-disable-next-line no-new
new Worker();
