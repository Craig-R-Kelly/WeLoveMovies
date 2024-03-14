const express = require("express");
const router = express.Router();
const reviewsController = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

//  /reviews/:reviewId
router.route("/:reviewId")
  .put(reviewsController.updateReview)
  .delete(reviewsController.deleteReview)
  //.all(methodNotAllowed);

module.exports = router;