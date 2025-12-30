const express = require("express");
const router = express.Router();
const {
  renderProfile,
  renderJoin,
  renderMain,
} = require("../controllers/page");
const { isLoggendIn, isNotLoggedIn } = require("../middlewares");

router.use((request, response, next) => {
  response.locals.user = request.user;
  response.locals.followerCount = 0;
  response.locals.followingCount = 0;
  response.locals.foloowingIdList = 0;
  next();
});

router.get("/profile", isLoggendIn, renderProfile);
router.get("/join", isNotLoggedIn, renderJoin);
router.get("/", renderMain);

module.exports = router;
