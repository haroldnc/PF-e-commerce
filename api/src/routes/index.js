const { Router } = require('express');
const router = Router();

router.use('/roles', require('./roles'));
router.use('/categories', require('./categories'));
router.use('/user', require('./user'))
router.use('/posts', require('./publications'));
router.use('/workers', require('./workers'))

module.exports = router;