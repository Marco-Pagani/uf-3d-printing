var path = require('path'),  
    express = require('express'), 
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    exampleRouter = require('../routes/example.routes');
const cors = require('cors');

var __clientdir = './../frontend/dist/frontend/';

module.exports.init = function() {
  // Connect to database
  mongoose.connect(config.db.uri, { useNewUrlParser: true });

  // Initialize app
  var app = express();

  app.use(cors());

  // Enable request logging for development debugging
  app.use(morgan('dev'));

  // Body parsing middleware 
  app.use(bodyParser.json());
  
  /**TODO
  Serve static files */
  app.use('/', express.static(path.resolve(__clientdir)));
  
  app.get('/', function(req, res) {
    res.sendFile('/index.html');
  });

  // Example endpoint
  app.use('/api/example', exampleRouter);

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.all('/*', function(req, res) {
    res.redirect('/');
  });

  return app;
};
