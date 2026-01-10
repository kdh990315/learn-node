const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const User = require("../models/user");

exports.isLoggendIn = (request, response, next) => {
  if (request.isAuthenticated()) {
    // 패스포트 통해서 로그인 했니?
    next();
  } else {
    response.status(403).send("로그인 필요");
  }
};

exports.isNotLoggedIn = (request, response, next) => {
  if (!request.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent("로그인한 상태입니다.");
    response.redirect(`/?error=${message}`);
  }
};

exports.verifyToken = (request, response, next) => {
  try {
    response.locals.decoded = jwt.verify(
      request.headers.authorization,
      process.env.JWT_SECRET
    );
    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      response.status(419).json({
        code: 419,
        message: "토큰이 만료되었습니다.",
      });
    }
    return response.status(401).json({
      code: 401,
      message: "유효하지 않은 토큰입니다.",
    });
  }
};

exports.apiLimit = async (request, response, next) => {
  let user;
  if (response.locals.decoded) {
    user = await User.findOne({ where: { id: response.locals.decoded.id } });
  }
  rateLimit({
    windowMs: 60 * 1000,
    max: user?.type === "premium" ? 1000 : 10,
    handler(req, res) {
      res.status(this.statusCode).json({
        code: this.statusCode,
        message: "1분에 한 번만 요청할 수 있습니다.",
      });
    },
  })(request, response, next);
};

exports.deprecated = (req, res) => {
  res.status(400).json({
    code: 410,
    message: "새로운 버전이 나왔습니다. 새로운 버전을 사용하세요.",
  });
};
