const requireLogin = require("../middlewares/requireLogin");
const twitterController = require('../controllers/TwitterController');

module.exports = app => {
  app.route("/api/twits")
  .get(requireLogin, twitterController.list_all_twits);

  app.route("/api/logs")
  .get(requireLogin, twitterController.list_all_logs);
};
