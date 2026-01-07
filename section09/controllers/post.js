const Post = require("../models/post");
const Hashtag = require("../models/hashTag");

exports.afterUploadImage = (request, response) => {
  console.log(request.file);
  response.json({ url: `/img/${request.file.filename}` });
};

exports.uploadPost = async (request, response, next) => {
  //request.body.content, request.body.url 을 활용할 수 잇음
  try {
    const post = await Post.create({
      content: request.body.content,
      img: request.body.url,
      UserId: request.user.id,
    });
    const hashtag = request.body.content.match(/#[^\s#]*/g);
    if (hashtag) {
      const result = await Promise.all(
        hashtag.map((tag) => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          });
        })
      );
      await post.addHashtags(result.map((r) => r[0]));
    }
    response.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};
