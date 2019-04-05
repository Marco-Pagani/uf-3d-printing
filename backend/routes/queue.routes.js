
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
  .post(q.create);

router.route('/pending')
  .get(q.listpending);

router.route('/marston')
  .get(q.listmarston);

router.route('/health')
  .get(q.listhealth);

router.route('/education')
  .get(q.listeducation);  

/*
  The ':' specifies a URL parameter. 
 */
router.route('/:id')
  .get(q.read)
  .put(q.update)
  .delete(q.delete);


router.param('id', q.findById);

module.exports = router;