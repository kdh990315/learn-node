const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const nunjucks = require("nunjucks");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");

const indexRouter = require("./routes");

const app = express();

app.set("port", process.env.PORT || 8003);
app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
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
      secure: false,
    },
  })
);

app.use("/", indexRouter);

// NOT FOUND
app.use((request, response, next) => {
  const error = new Error(
    `${request.method} ${request.url} 라우터가 없습니다.`
  );
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.locals.message = error.message;
  response.locals.error = process.env.NODE_ENV !== "production" ? error : {};
  response.status(error.status || 500);
  response.render("error");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트가 대기중입니다.");
});
