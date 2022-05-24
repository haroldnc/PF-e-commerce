const { Router } = require('express');
const router = Router();

router.use('/roles', require('./roles'));
router.use('/categories', require('./categories'));

module.exports = router;