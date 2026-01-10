const { User, Domain } = require("../models");
const { v4: uuidv4 } = require("uuid");

exports.renderLogin = async (request, response, next) => {
  try {
    const user = await User.findOne({
      where: { id: request.user?.id || null },
      include: { model: Domain },
    });
    response.render("login", {
      user,
      domains: user?.Domains || [],
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.createDomain = async (request, response, next) => {
  try {
    await Domain.create({
      UserId: request.user.id,
      host: request.body.host,
      type: request.body.type,
      clientSecret: uuidv4(),
    });

    response.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};
