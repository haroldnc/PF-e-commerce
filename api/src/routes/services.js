const { Router } = require('express');
const {
   getServices,
   getServicesById,
   addService,
   updateService,
   deleteService
} = require('../controllers/services.controller');
const { validarADMIN_ROLE } = require('../middlewares/validarAdminRole');


const router = Router();

router.get('/', getServices);
router.get('/:id', getServicesById);
router.post('/', addService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports = router;