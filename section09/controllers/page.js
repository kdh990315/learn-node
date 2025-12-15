exports.renderProfile = (request, response, next) => {
  response.render("profile", { title: "내 정보 - NodeBird" });
};
exports.renderJoin = (request, response, next) => {
  response.render("join", { title: "회원 가입 - NodeBird" });
};
exports.renderMain = (requset, response, next) => {
  response.render("main", {
    title: "NodeBird",
    twits: [],
  });
};

// 라우터 -> 컨트롤러(요청과 응답을 알고 있음) -> 서비스(요청, 응답을 모름)
