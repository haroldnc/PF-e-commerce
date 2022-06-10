const {Router} = require("express")
const {addPublicate} = require("../controllers/Publications/Agregar.controller")
const {getId} = require("../controllers/Publications/ID.controller")
const {getAll} = require("../controllers/Publications/Publication.controller")
const {upDatePost , deletePost} = require("../controllers/Publications/PostRoutes")
const { getPostsByService } = require("../controllers/Publications/ByServiceID.controller");
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar.campos');

const router = Router()

router.get("/", getAll);
router.get("/:id", getId)
router.get("/service/:idService", getPostsByService);
router.post("/",
[
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('price', 'Price name is required').not().isEmpty(),
    validarCampos
], addPublicate)
router.put("/:id", upDatePost )
router.delete("/:id", deletePost)

module.exports = router;