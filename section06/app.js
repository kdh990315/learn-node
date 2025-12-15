const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const morgan = require("morgan");

app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
    },
  })
);
app.use("/", (req, res, next) => {
  if (req.session.id) {
    express.static(__dirname, "public")(req, res, next);
  } else {
    next();
  }
});
app.use(express.json()); // json 형식의 요청 바디를 파싱
app.use(express.urlencoded({ extended: true })); // urlencoded 형식의 요청 바디를 파싱 -> form 형식의 요청 바디를 파싱
// true면 qs 모듈을 사용하여 파싱
// false면 querystring 모듈을 사용하여 파싱
// app.use('요청 경로', express.static('실제 경로'))
app.use("/", express.static(__dirname, "public")); // public 폴더 안의 파일을 정적 파일로 제공

app.use((req, res, next) => {
  console.log("모든 요청에 실행됩니다.");
  next();
}),
  (req, res, next) => {
    try {
      console.log("모든 요청에 실행됩니다.2");
      next();
    } catch (error) {
      next(error); // next(error)는 에러 핸들러로 이동
    }
  };

const fs = require("fs");
const multer = require("multer");

try {
  fs.readdirSync("uploads");
} catch (error) {
  console.error("uploads 폴더가 없어 uploads 폴더를 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname, "mutipart.html"));
});

// 단일 파일 업로드
// app.post("/upload", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.send("ok");
// });

// 다중 파일 업로드 name 값이 image인 파일이 여러 개 업로드 되면 배열로 받음
// app.post("/upload", upload.array("image"), (req, res) => {
//   console.log(req.files);
//   res.send("ok");
// });

// name 값이 image인 파일과 name 값이 image2인 파일을 각각 배열로 받음
app.post(
  "/upload",
  upload.fields([
    { name: "image", limits: 5 },
    { name: "image2", limits: { fileSize: 10 * 1024 * 1024 } },
  ]),
  (req, res) => {
    console.log(req.files);
    res.send("ok");
  }
);

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));

  // res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  // res.end(JSON.stringify({ message: "Hello World" }));

  // res.json({ message: "Hello World" });
});

app.post("/", (req, res) => {
  res.send("Hello World");
});

app.get("/category/:name", (req, res) => {
  res.send(`${req.params.name} 카테고리 페이지`);
});

app.get("/about", (req, res) => {
  res.send("About express");
});

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("서버 에러가 발생했습니다.");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 대기 중입니다!");
});
