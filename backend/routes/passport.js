const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../models/userModel");

const findOrCreate = require("mongoose-findorcreate");
const GOOGLE_CLIENT_ID =
  "824812962911-3k4hhdf0sq3rlv458aghhd3j423v0kd4.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      // const id = profile.id;
      // const email = profile.emails[0].value;
      // const firstName = profile.name.givenName;
      // const lastName = profile.name.familyName;
      // const profilePhoto = profile.photos[0].value;
      // const source = "google";
      User.findOrCreate(
        {
          googleId: profile.id,
          email: profile.emails[0].value,
          name: profile.displayName,
          pic: profile.photos[0].value,
        },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
