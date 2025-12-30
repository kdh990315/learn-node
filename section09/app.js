const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
const morgan = require("morgan");
const passport = require("passport");
const { sequelize } = require("./models");

dotenv.config();
const pageRouter = require("./routes/page");
const authRouter = require("./routes/auth");
const passportConfig = require("./passport");

const app = express();
passportConfig();

app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan("dev")); // 개발 -> dev , 서비스 -> combined
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); // requset.body를 ajax json 요청으로부터
app.use(express.urlencoded({ extended: false })); // request.body form으로부터
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
app.use(passport.initialize()); // request.user, request.login, request.isAuthenticate, request.logout 은 여기서 옴
app.use(passport.session()); // connect.sid라는 이름으로 세션 쿠키가 브라우저로 전송

app.use("/", pageRouter);
app.use("/auth", authRouter);

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
  response.locals.error = process.env.NODE_ENV !== "production" ? error : {}; // 개발 모드에서는 에러를 보여주지만 배포시엔 에러 노출을 최소화한다.
  // 보통 개발, 배포, 테스트 로 구분한다.
  response.status(error.status || 500);
  response.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트가 대기중입니다.");
});
