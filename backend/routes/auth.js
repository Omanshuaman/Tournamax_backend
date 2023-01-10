const router = require("express").Router();
const passport = require("passport");
const Pin = require("../models/pin");

const CLIENT_URL = "https://tournamaxsports.com";
const CLIENT_URL1 = "http://localhost:3000/chats";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //  cookies: req.cookies,
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["openid", "email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect to secrets.
    console.log(req.user);
    //   localStorage.setItem("userInfo", JSON.stringify(user));
    res.redirect(CLIENT_URL);
  }
);

module.exports = router;
