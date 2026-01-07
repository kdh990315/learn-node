const User = require("../models/user");

exports.follow = async (request, response, next) => {
  //request.user.id, request.params.id
  try {
    const user = await User.findOne({ where: { id: request.user.id } });
    if (user) {
      await user.addFollowing(+request.params.id, 10);
      response.send("success");
    } else {
      response.status(404).send("no user");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
