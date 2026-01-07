const express = require("express");
const { isLoggendIn } = require("../middlewares");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { afterUploadImage, uploadPost } = require("../controllers/post");

try {
  fs.readdirSync("uploads");
} catch (error) {
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(request, file, cb) {
      cb(null, "uploads/");
    },
    filename(request, file, cb) {
      console.log(request, file, cb);
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

router.post("/img", isLoggendIn, upload.single("img"), afterUploadImage);

const upload2 = multer();

router.post("/", isLoggendIn, upload2.none(), uploadPost);

module.exports = router;
