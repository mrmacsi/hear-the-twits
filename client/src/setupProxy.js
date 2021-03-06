const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/twitter", { target: "http://localhost:5000" }));
  app.use(proxy("/api/**", { target: "http://localhost:5000", changeOrigin: true  })); //if only one slash use * if all slashes after the route use **
};

