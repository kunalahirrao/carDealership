const express = require("express");
const router = new express.Router();
const api = require("./testController");

router.get("/test-management/test", api.test);
router.post("/test-management/test",api.createTest)

module.exports = router