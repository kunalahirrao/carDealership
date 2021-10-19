const express = require("express");
const router = new express.Router();
const api = require("./carListingController");

router.get("/car-management/cars", api.listCars);
router.post("/car-management/contact", api.createContact);


module.exports = router