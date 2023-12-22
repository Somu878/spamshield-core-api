const express = require("express");
const controllers = require("../controllers/controller");
const router = express.Router();

router.post("/register", controllers.registerUser);
router.post("/markSpam", controllers.markSpam);
router.get("/searchByName", controllers.searchByName);
router.get("/searchByMobileNumber", controllers.searchByMobileNumber);

module.exports = router;
