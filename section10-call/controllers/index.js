const axios = require("axios");

const URL = "http://localhost:8002/v2";
axios.defaults.headers.common.origin = "http://localhost:4000";

exports.test = async (request, response, next) => {
  try {
    if (!request.session.jwt) {
      const tokenResult = await axios.post("http://localhost:8002/v2/token", {
        clientSecret: process.env.CLIENT_SECRET,
      });
      if (tokenResult.status === 200) {
        request.session.jwt = tokenResult.data.token;
      } else {
        return response.status(tokenResult.data?.code).json(tokenResult.data);
      }
    }

    const result = await axios.get("http://localhost:8002/v2/test", {
      headers: {
        authorization: request.session.jwt,
      },
    });

    return response.json(result.data);
  } catch (error) {
    console.error(error);
    if (error.response.status === 419) {
      return response.json(error.response.data);
    }
    return next(error);
  }
};

const request = async (request, api) => {
  try {
    if (!request.session.jwt) {
      const tokenResult = await axios.post(`${URL}/token`, {
        clientSecret: process.env.CLIENT_SECRET,
      });
      request.session.jwt = tokenResult.data.token;
    }

    return await axios.get(`${URL}${api}`, {
      headers: {
        authorization: request.session.jwt,
      },
    });
  } catch (error) {
    if (error.response?.status === 419) {
      delete request.session.jwt;
      return request(request, api);
    }
    throw error.response;
  }
};

exports.getMyPosts = async (req, res, next) => {
  try {
    const result = await request(req, "/posts/my");
    res.json(result.data);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
exports.searchByHashtag = async (req, res, next) => {
  try {
    const result = await request(
      req,
      `/posts/hashtag/${encodeURIComponent(req.params.hashtag)}`
    );
    res.json(result.data);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
