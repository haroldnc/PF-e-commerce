const { Router } = require('express');
const {
   getServices,
   getServicesById,
   deleteService
} = require('../controllers/services.controller');
const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');


const router = Router();

router.get('/', getServices);
router.get('/:idService', getServicesById);
router.delete('/:idService', deleteService);

module.exports = router;