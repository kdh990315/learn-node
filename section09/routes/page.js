const express = require("express");
const router = express.Router();
const {
  renderProfile,
  renderJoin,
  renderMain,
} = require("../controllers/page");

router.use((request, response, next) => {
  response.locals.user = null;
  response.locals.followerCount = 0;
  response.locals.followingCount = 0;
  response.locals.foloowingIdList = 0;
  next();
});

router.get("/Profile", renderProfile);
router.get("/join", renderJoin);
router.get("/", renderMain);

module.exports = router;
