/* Dependencies */
var example = require('../controllers/example.controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  .get(example.list)
  .post(example.byName);

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:parameter')
  .get(example.read);
  // ADMIN ROUTES
  // .put(decals.update)
  // .delete(decals.delete);


router.param('parameter', example.byName);

module.exports = router;