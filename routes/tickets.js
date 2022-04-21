var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// All routes starts with: /flights (because of the mounting in server.js)


router.get('/:id', ticketsCtrl.new);
// GET /flights/:id (show functionality) 



module.exports = router;