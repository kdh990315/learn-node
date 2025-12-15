const http = require("http");
const fs = require("fs").promises;
const path = require("path");

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const session = {};

http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith("/login")) {
      const url = new URL(req.url, "http://localhost:8085");
      const name = url.searchParams.get("name");
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 5);
      const uniqueId = Date.now();
      session[uniqueId] = {
        name,
        expires,
      };
      res.writeHead(302, {
        location: "/",
        "Set-Cookie": `session=${uniqueId}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
      });
      res.end();
    } else if (
      cookies.session &&
      session[cookies.session].expires > new Date()
    ) {
      res.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
      });
      res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
      try {
        const data = await fs.readFile(path.join(__dirname, "cookie2.html"));
        res.writeHead(200, {
          "Content-Type": "text/html; charset=utf-8",
        });
        res.end(data);
      } catch (err) {
        console.error(err);
        res.writeHead(500, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        res.end("서버 오류가 발생했습니다.");
      }
    }
  })
  .listen(8085, () => {
    console.log("8085번 포트에서 서버 대기중입니다!");
  });
