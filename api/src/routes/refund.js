const {CreateRefund,RetrievReund,getAllRefund} = require("../helpers/Refund")
const { Router } = require('express');
const router = Router()


router.post('/', CreateRefund)
router.get('/:id', RetrievReund)
router.get('/admin/all', getAllRefund)

module.exports = router