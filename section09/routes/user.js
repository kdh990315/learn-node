const express = require("express");
const { isLoggendIn } = require("../middlewares");
const { follow } = require("../controllers/user");
const router = express.Router();

router.post("/:id/follow", isLoggendIn, follow);

module.exports = router;
