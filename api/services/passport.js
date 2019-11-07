const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
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
//1. oAuth authentication strategy for authenticating user using twitter +1
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
        //4. Store/ log all authentications and API requests in RDMS database (preferably mysql / mongo) +1
        var token = await new Token({
          oAuthProvider:"Twitter",
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

      //4. Store/ log all authentications and API requests in RDMS database (preferably mysql / mongo) +1
      var token = await new Token({
        oAuthProvider:"Twitter",
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

//BONUS GOOGLE API
//5. These features must be extendable / reusable so that in future we can reuse these code to support other social media applications
/* 
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id },{ __v: false });

      if (existingUser) {
        console.log("already exists", existingUser);

        var token = await new Token({
          oAuthProvider:"Google",
          accessToken: accessToken,
          refreshToken: refreshToken,
          user: existingUser.id,
          dateCreated: Date.now()
        }).save();

        return done(null, existingUser);
      }

      const user = await new User({
        googleID: profile.id,
        name: profile.displayName
      }).save();

      const user = await new User({
        twitterID: profile.id,
        name: profile.displayName
      }).save();

      var token = await new Token({
        oAuthProvider:"Google",
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: user.id,
        dateCreated: Date.now()
      }).save();

      done(null, user);
      console.log("new user created", user);
    }
  )
); */