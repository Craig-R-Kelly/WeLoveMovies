const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCritic = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  c_created_at: "critic.created_at",
  c_updated_at: "critic.updated_at",
  r_created_at: "created_at",
  r_updated_at: "updated_at",
  r_critic_id: "critic_id",
});

function readReview(reviewId) {
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

//  PUT /reviews/:reviewId
async function updateReview(reviewId, reviewData) {
  //console.log("\nupdateReview called with this reviewId:", reviewId, "and this reviewData:", reviewData);
  await knex("reviews").where({ review_id: reviewId }).update(reviewData);

  return knex("reviews as r")
    .join("critics as c", "r.critic_id", "c.critic_id")
    .select(
      "r.review_id",
      "r.content",
      "r.score",
      "r.created_at as r_created_at",
      "r.updated_at as r_updated_at",
      "r.critic_id as r_critic_id",
      "r.movie_id",
      "c.critic_id",
      "c.preferred_name",
      "c.surname",
      "c.organization_name",
      "c.created_at as c_created_at",
      "c.updated_at as c_updated_at"
    )
    .where({ "r.review_id": reviewId })
    .first()
    .then(addCritic);
}

//  DELETE /reviews/:reviewId
function deleteReview(reviewId) {
  return knex("reviews").where({ review_id: reviewId }).del();
}

module.exports = {
  readReview,
  updateReview,
  deleteReview,
};
