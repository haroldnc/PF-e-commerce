const {Router} = require("express")
const {addPublicate} = require("../controllers/Publications/Agregar.controller")
const {getId} = require("../controllers/Publications/ID.controller")
const {getAll} = require("../controllers/Publications/Publication.controller")
const {upDatePost , deletePost} = require("../controllers/Publications/PostRoutes")
const { getPostsByService } = require("../controllers/Publications/ByServiceID.controller");

const router = Router()

router.get("/", getAll)
router.get("/:id", getId)
router.get("/service/:idService", getPostsByService);
router.post("/", addPublicate)
router.put("/:id", upDatePost )
router.delete("/:id", deletePost)

module.exports = router;