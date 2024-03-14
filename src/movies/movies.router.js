const express = require("express");
const router = express.Router();
const moviesController = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(moviesController.listMovies).all(methodNotAllowed);

router.route("/:movieId").get(moviesController.readMovie).all(methodNotAllowed);

router
  .route("/:movieId/theaters")
  .get(moviesController.listTheatersForMovieId)
  .all(methodNotAllowed);

router
  .route("/:movieId/reviews")
  // .get((req, res) => {
  //   console.log(
  //     `GET request to /movies/${req.params.movieId}/reviews was successful`
  //   );
  //   res.send(
  //     `GET request to /movies/${req.params.movieId}/reviews was successful`
  //   );
  // })
  .get(moviesController.listReviewsForMovieId)
  .all(methodNotAllowed);

module.exports = router;

