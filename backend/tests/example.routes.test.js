var should = require('should'), 
    request = require('supertest'),
    express = require('../config/express'),
    mongoose = require('mongoose');

/* Global variables */
var server, app, agent, decal;

/* Unit tests for testing server side routes for the garages API */
describe('Example test', function() {

    this.timeout(10000);

    before(function(done) {
        app = express.init();
        server = app.listen(done);
        agent = request.agent(server);
    });

    it('should be able to X', function(done) {
    // agent.get('/api/X')
    //     .expect(200)
    //     .end(function(err, res) {
    //         should.not.exist(err);
    //         should.exist(res);
    //         res.body.should.have.length(1);
    //         done();
    //     });
    });

    after(function(done) {
        mongoose.connection.close();
        server.close(done);
    });
});