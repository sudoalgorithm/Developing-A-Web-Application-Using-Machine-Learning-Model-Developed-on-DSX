var express = require('express');
var path = require('path');

module.exports = function(app) {
  var router = express.Router();
  router.use(express.static(process.cwd() + '/public'));
  router.get('*', function (request, response){
    response.sendFile(path.resolve(process.cwd(), 'public', 'index.html'))
  });
  app.use(router);
};

