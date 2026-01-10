const express = require("express");
const { isLoggendIn } = require("../middlewares");
const { renderLogin, createDomain } = require("../controllers");

const router = express.Router();

router.get("/", renderLogin);
router.post("/domain", isLoggendIn, createDomain);

module.exports = router;
