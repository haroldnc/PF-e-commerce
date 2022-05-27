const {Router} = require("express")
const {addPublicate} = require("../controllers/Publications/Agregar.controller")
const {getId} = require("../controllers/Publications/ID.controller")
const {getAll} = require("../controllers/Publications/Publication.controller")
const {upDatePost , deletePost} = require("../controllers/Publications/PostRoutes")

const router = Router()

router.get("/", getAll)
router.get("/:id", getId)
router.post("/", addPublicate)
router.put("/:id", upDatePost )
router.delete("/:id", deletePost)

module.exports = router;