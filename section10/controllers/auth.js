const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.join = async (request, response, next) => {
  const { nickName, email, password } = request.body;
  try {
    const exUser = await User.findOne({ where: { email } });
    if (exUser) {
      return response.redirect("/join?error=exist");
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      nickName,
      password: hash,
    });
    return response.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// POST /auth/login
exports.login = (request, response, next) => {
  passport.authenticate("local", (authError, user, info) => {
    // (서버실패, 유저, 로직 실패)
    if (authError) {
      // 서버 실패
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      // 로직 실패
      return response.redirect(`/?loginError=${info.message}`);
    }
    return request.login(user, (loginError) => {
      // 로그인 성공
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return response.redirect("/");
    });
  })(request, response, next);
};
exports.logout = (request, response, next) => {
  request.logout(() => {
    response.redirect("/");
  });
};
