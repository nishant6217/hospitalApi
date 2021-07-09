const express = require("express");
const passport = require("passport");

const router = express.Router();
const docAPI = require("../../../controllers/api/v1/doctor");

router.post("/register", docAPI.register);
router.post("/login", docAPI.login);
router.post(
  "/patients/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  docAPI.createReport
);

module.exports = router;
