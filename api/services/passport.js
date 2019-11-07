const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const mongoose = require("mongoose");
const keys = require("../../config/keys");

const User = mongoose.model("User");
const Token = mongoose.model("Token");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.twitterConsumerKey,
      consumerSecret: keys.twitterConsumerSecret,
      callbackURL: keys.callbackURL,
      proxy: true
    },
    async (token, tokenSecret, profile, done) => {
      const existingUser = await User.findOne({ twitterID: profile.id },{ __v: false });

      if (existingUser) {
        console.log("already exists", existingUser);
        var token = await new Token({
          oauthAccessToken: token,
          oauthAccessTokenSecret: tokenSecret,
          user: existingUser.id,
          dateCreated: Date.now()
        }).save();
        return done(null, existingUser);
      }

      const user = await new User({
        twitterID: profile.id,
        name: profile.displayName
      }).save();

      var token = await new Token({
        oauthAccessToken: token,
        oauthAccessTokenSecret: tokenSecret,
        user: user.id,
        dateCreated: Date.now()
      }).save();

      done(null, user);
      console.log("new user created", user);
    }
  )
);
