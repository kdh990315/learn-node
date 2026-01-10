const Domain = require("../models/domain");
const User = require("../models/user");
const Post = require("../models/post");
const HashTag = require("../models/hashTag");
const jwt = require("jsonwebtoken");
const { where } = require("sequelize");

exports.createToken = async (request, response, next) => {
  const { clientSecret } = request.body; // 프론트에서 토큰을 body로 보내주라고 했다고 가정
  try {
    const domain = await Domain.findOne({
      where: {
        clientSecret,
      },
      include: {
        model: User,
        attributes: ["id", "nickName"],
      },
    });

    if (!domain) {
      return response.status(401).json({
        code: 401,
        message: "등록된 도메인이 없습니다. 먼저 도메인을 등록하세요",
      });
    }

    const token = jwt.sign(
      {
        id: domain.User.id,
        nick: domain.User.nickName,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30m",
        issuer: "nodebird",
      }
    );
    return response.json({
      code: 200,
      message: "토큰이 발급되었습니다.",
      token,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
};

exports.tokenTest = (request, response, next) => {
  response.json(response.locals.decoded);
};

exports.getMyPosts = (request, response) => {
  Post.findAll({ where: { userId: response.locals.decoded.id } })
    .then((posts) => {
      response.json({
        code: 200,
        payload: posts,
      });
    })
    .catch((error) => {
      return response.status(500).json({
        code: 500,
        message: "서버 에러",
      });
    });
};

exports.getPostsByHashtag = async (request, response) => {
  try {
    const hashtag = await HashTag.findOne({
      where: { title: request.params.title },
    });

    if (!hashtag) {
      return response.status(404).json({
        code: 404,
        message: "검색 결과가 없습니다.",
      });
    }

    const posts = await hashtag.getPosts();
    if (posts.length === 0) {
      return response.status(404).json({
        code: 404,
        message: "검색 결과가 없습니다.",
      });
    }

    return response.json({
      code: 200,
      payload: posts,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      code: 500,
      message: "서버 에러",
    });
  }
};
