const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const GoogleModel = require("../models/googleModel");
const findOrCreate = require("mongoose-findorcreate");
const GOOGLE_CLIENT_ID =
  "824812962911-3k4hhdf0sq3rlv458aghhd3j423v0kd4.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);

      GoogleModel.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  GoogleModel.findById(id, function (err, user) {
    done(err, user);
  });
});
