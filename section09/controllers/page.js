const Post = require("../models/post");
const User = require("../models/user");
const Hashtag = require("../models/hashTag");

exports.renderProfile = (request, response, next) => {
  response.render("profile", { title: "내 정보 - NodeBird" });
};
exports.renderJoin = (request, response, next) => {
  response.render("join", { title: "회원 가입 - NodeBird" });
};
exports.renderMain = async (request, response, next) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User,
        attributes: ["id", "nickName"],
      },
      order: [["createdAt", "DESC"]],
    });
    response.render("main", {
      title: "NodeBird",
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.renderHashtag = async (request, response, next) => {
  const query = request.query.hashtag;
  if (!query) {
    return response.redirect("/");
  }
  try {
    const hashtag = await Hashtag.findOne({
      where: { title: query.toLowerCase() },
    });
    let posts = [];
    if (hashtag) {
      posts = await hashtag.getPosts({
        include: [{ model: User, attributes: ["id", "nickName"] }],
        order: [["createdAt", "DESC"]],
      });
    }
    response.render("main", {
      title: `${query} | NodeBrid`,
      twits: posts,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
// 라우터 -> 컨트롤러(요청과 응답을 알고 있음) -> 서비스(요청, 응답을 모름)
