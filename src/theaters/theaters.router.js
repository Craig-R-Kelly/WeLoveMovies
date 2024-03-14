const express = require("express");
const router = express.Router();
const theatersController = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .get(theatersController.listTheatersWithMovies)
  .all(methodNotAllowed);

module.exports = router;
