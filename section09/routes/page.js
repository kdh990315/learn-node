const express = require("express");
const router = express.Router();
const {
  renderProfile,
  renderJoin,
  renderMain,
  renderHashtag,
} = require("../controllers/page");
const { isLoggendIn, isNotLoggedIn } = require("../middlewares");

router.use((request, response, next) => {
  response.locals.user = request.user;
  response.locals.followerCount = request.user?.Followers.length || 0;
  response.locals.followingCount = request.user?.Followings.length || 0;
  response.locals.followingIdList =
    request.user?.Followings.map((f) => f.id) || [];
  next();
});

router.get("/profile", isLoggendIn, renderProfile);
router.get("/join", isNotLoggedIn, renderJoin);
router.get("/", renderMain);
router.get("/hashtag", renderHashtag);

module.exports = router;
