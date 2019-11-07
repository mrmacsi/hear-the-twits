"use strict";

const mongoose = require("mongoose");
const Token = mongoose.model("Token");
const oauth = require('oauth');
const keys = require("../../config/keys");
const consumer = new oauth.OAuth(
    "https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token", 
    keys.twitterConsumerKey, keys.twitterConsumerSecret, "1.0A", keys.callBackUrl, "HMAC-SHA1");

//2. Implement Twitter’s REST API twitter to fetch latest tweets +1
module.exports = {
  list_all_twits: async function(req, res) {
    Token.findOne(
      { user: req.user.id, oAuthProvider:"Twitter" },
      { __v: false },
      {sort: {dateCreated: "desc" }}, //get the latest token
      function(err, token) {
        if (err) res.status(422).send(err);
        consumer.get("https://api.twitter.com/1.1/statuses/user_timeline.json", token.oauthAccessToken, token.oauthAccessTokenSecret, function (error, data, response) {
          if (error) {
            res.status(422).send(error);
          } else {
            var parsedData = JSON.parse(data);
            res.send(parsedData);
          }
        });
      }
    );
  },
  list_all_logs: async function(req, res) {
    Token.find({ user: req.user.id })
    .select({
      __v: false
    })
    .sort({ dateCreated: "desc" })
    .exec(function(err, tokens) {
      if (err) res.status(422).send(err);
      res.json(tokens);
    });
  }
};
