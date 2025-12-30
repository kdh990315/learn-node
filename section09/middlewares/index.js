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
