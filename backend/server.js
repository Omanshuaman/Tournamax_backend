const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const passport = require("passport");
const passportSetup = require("./routes/passport");

const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const cookieSession = require("cookie-session");
const authRoute = require("./routes/auth");
const pinRoute = require("./routes/pins");
const posterRoutes = require("./routes/posterRoutes");
const session = require("express-session");
const bodyParser = require("body-parser");

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const CLIENT_URL = "https://tournamaxsports.com";

dotenv.config();
connectDB();
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    origin: "https://tournamaxsports.com",

    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.get("/auth/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //  cookies: req.cookies,
    });
  }
});

app.get("/auth/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

app.get("/auth/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["openid", "email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect to secrets.
    console.log(req.user);
    //   localStorage.setItem("userInfo", JSON.stringify(user));
    res.redirect(CLIENT_URL);
  }
);

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});

app.use("/api/user", userRoutes);
app.use("/api/pins", pinRoute);

app.use("/api/poster", posterRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}...`.yellow.bold));
