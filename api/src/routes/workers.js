const {Router} = require("express")
const router = Router()
const {upDateWorker,getWorkerById,getAllWorkers} = require("../controllers/Workers")

router.get("/" , getAllWorkers);
router.get("/:id",getWorkerById );
router.put("/id", upDateWorker);

module.exports = router;