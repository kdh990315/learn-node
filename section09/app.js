const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
const pageRouter = require("./routes/page");

const app = express();

app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev")); // 개발 -> dev , 서비스 -> combined
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false, //http 일때 false , https 일때 true
    },
  })
);

app.use("/", pageRouter);

// NOT FOUND
app.use((request, response, next) => {
  const error = new Error(
    `${request.method} ${request.url} 라우터가 없습니다.`
  );
  error.status = 404;
  next(error);
});

app.use((error, requset, response, next) => {
  response.locals.message = error.message;
  response.locals.error = process.env.NODE_ENV !== "production" ? err : {}; // 개발 모드에서는 에러를 보여주지만 배포시엔 에러 노출을 최소화한다.
  // 보통 개발, 배포, 테스트 로 구분한다.
  response.status(err.status || 500);
  response.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트가 대기중입니다.");
});
