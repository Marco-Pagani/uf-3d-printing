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
  
  app.use('/', express.static(path.resolve(__clientdir)));
  
  // Example endpoint
  app.use('/api/example', exampleRouter);
  
  // Catch all other routes and return the index file
  app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(__clientdir), '/index.html'));
  });

  /**TODO 
  Go to homepage for all routes not specified */ 
  app.all('/*', function(req, res) {
    res.redirect('/');
  });

  return app;
};
