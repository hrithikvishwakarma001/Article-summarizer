const { Router } = require("express");
const router = Router();
const summary = require("../middleware/summary");
router.post("/", summary);
module.exports = router;
