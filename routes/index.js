var express = require('express');
var router = express.Router();
require('../components/url/routes')(router);
module.exports = router;