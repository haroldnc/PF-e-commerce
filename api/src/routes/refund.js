const {CreateRefund,RetrievReund} = require("../helpers/Refund")
const { Router } = require('express');
const router = Router()


router.post('/', CreateRefund)
router.get('/:id', RetrievReund)

module.export = router