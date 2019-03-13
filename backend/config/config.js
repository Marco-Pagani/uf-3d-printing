try {
    var SECRETS = require('../secrets.json');
    var CREDS = SECRETS.MONGO_CREDENTIALS;
}
catch(e) {
    if (e.code !== "MODULE_NOT_FOUND")
        throw e;
    var CREDS = process.env.MONGO_CREDENTIALS;
}

module.exports = {
  db: {
    uri: 'mongodb://' + CREDS + '@ds019976.mlab.com:19976/uf-3d-printing', //place the URI of your mongo database here.
  }, 
  port: process.env.PORT || 8080
};

