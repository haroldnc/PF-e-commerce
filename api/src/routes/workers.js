const {Router} = require("express")
const router = Router()
const {upDateWorker,getWorkerById,getAllWorkers,getWorkersBySubscription} = require("../controllers/Workers")

router.get("/" , getAllWorkers);
router.get("/:id", getWorkerById );
router.get("/subscriptions/:name", getWorkersBySubscription);
router.put("/:id", upDateWorker);

module.exports = router;