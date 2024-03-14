const reviewsService = require("./reviews.service");

// validation

function validReviewId(req, res, next) {
  const reviewId = req.params.reviewId;
  if (!(Number.isInteger(Number(reviewId)) && Number(reviewId) > 0)) {
    return res
      .status(400)
      .json({ error: "Review ID must be a positive integer." });
  }
  next();
}

async function reviewExists(req, res, next) {
  const reviewId = req.params.reviewId;
  const review = await reviewsService.readReview(reviewId);
  if (!review) {
    return next({ status: 404, message: "Review cannot be found." });
  }
  res.locals.review = review;
  next();
}

//  CRUD operations

//  PUT /reviews/:reviewId
async function updateReview(req, res, next) {
  //console.log("\nIncoming req.body:", req.body);
  const reviewId = res.locals.review.review_id;
  const reviewData = req.body.data; // don't forget `.data`!
  const updatedReview = await reviewsService.updateReview(reviewId, reviewData);
  //console.log("\nupdatedreview:\n\n", updatedReview);
  res.json({ data: updatedReview });
}

//  DELETE /reviews/:reviewId
async function deleteReview(req, res, next) {
  await reviewsService.deleteReview(req.params.reviewId);
  res.sendStatus(204).end();
}

module.exports = {
  updateReview: [validReviewId, reviewExists, updateReview],
  deleteReview: [validReviewId, reviewExists, deleteReview],
};
