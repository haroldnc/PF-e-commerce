const { Router } = require('express');

const router = Router();
router.use('/roles', require('./roles'));

module.exports = router;