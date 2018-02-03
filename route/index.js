

var search = require('./search');
const routes = require('express').Router();



routes.get('/:id', search.select );
module.exports = routes;
