const express = require("express");
const { verifyToken, apiLimit } = require("../middlewares");
const {
  createToken,
  tokenTest,
  getMyPosts,
  getPostsByHashtag,
} = require("../controllers/v2");

const router = express.Router();

// POST /v1/token
router.post("/token", apiLimit, createToken);
// GET /v1/test
router.get("/test", verifyToken, apiLimit, tokenTest);

router.get("/posts/my", verifyToken, apiLimit, getMyPosts);
router.get("/posts/hashtag/:title", verifyToken, apiLimit, getPostsByHashtag);
module.exports = router;
