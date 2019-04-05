
//Routes
/* Dependencies */
var q = require('../controllers/queue.controller.js'), 
    express = require('express'), 
    router = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 */
router.route('/')
  .get(q.list)
  .post(q.create)
  .post(q.byName);
  

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:qId')
  .get(q.read)

  //Admin Routes
  .put(q.update)
  .delete(q.delete);


router.param('qId', q.byName);

module.exports = router;