const { Router } = require('express');
const router = Router();

router.use('/roles', require('./roles'));
router.use('/categories', require('./categories'));
router.use('/user', require('./user'));
router.use('/posts', require('./Publications'));
router.use('/workers', require('./workers'));
router.use('/services', require('./services'));
router.use('/auth', require('./authentication'));

module.exports = router;