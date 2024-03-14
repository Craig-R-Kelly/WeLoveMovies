const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

const addCategory = mapProperties({
  critic_Id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at: "critic.updated_at",
  review_created_at: "created_at", // desired name restored
  review_updated_at: "updated_at", //    "     "      "
});

//  GET /movies
//  returning all--or only each which is_showing  */
function list(isShowing) {
  if (isShowing) {
    return knex("movies as m")
      .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
      .select(
        "m.movie_id as id",
        "m.title",
        "m.runtime_in_minutes",
        "m.rating",
        "m.description",
        "m.image_url"
      )
      .where({ "mt.is_showing": true })
      .distinct("m.*"); // lists each movie 1x even if showing in many theaters
  }
  return knex("movies").select(
    "movie_id as id",
    "title",
    "runtime_in_minutes",
    "rating",
    "description",
    "image_url"
  );
}

//  GET /movies/:movieId
function read(movieId) {
  return knex("movies")
    .select(
      "movie_id",  // contra instructions, don't alias as `id`
      "title",
      "runtime_in_minutes",
      "rating",
      "description",
      "image_url",
      "created_at",// contra instructions, include this
      "updated_at" // Same here.  Test requirements != instructions.  
    )
    .where({ movie_id: movieId })
    .first(); // Return 1st match, as object--NOT as array of objects.  Without `.first()`, even when receiving (as expected) one movie, it was as an array of 1 object.
}

//  GET /movies/:movieId/theaters
function listTheatersForMovie(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select("t.*", "mt.is_showing", "mt.movie_id")
    .where({ "mt.movie_id": movieId });
}

//  GET /movies/:movieId/reviews
function listReviewsForMovie(movieId) {
  return (
    knex("reviews as r")
      .join("critics as c", "r.critic_id", "c.critic_id")
      .select(
        "r.review_id",
        "r.content",
        "r.score",
        "r.created_at as review_created_at", // Temporarily aliased until `critic` nesting,
        "r.updated_at as review_updated_at", // otherwise these get overwritten.
        "r.critic_id",
        "r.movie_id",
        "c.critic_id as critic.critic_id",
        "c.preferred_name as critic.preferred_name",
        "c.surname as critic.surname",
        "c.organization_name as critic.organization_name",
        "c.created_at as critic.created_at",
        "c.updated_at as critic.updated_at"
      )
      .where({ "r.movie_id": movieId })
      //.first();//.then(addCategory)                                 //[1]
      //.first().then(addCategory);                                   //[2]
      //.then(addCategory);                                           //[3]
      .then((reviews) => reviews.map((review) => addCategory(review)))//[4]
  ); 
}
/* [1]Even when `.then(addCategory)` was still commented out, I couldn't get all columns to return.  Duplicate names, duh.  So I aliased everything coming from `c.` and got all columns (although names were off).  At that point I uncommented addCategory[2] and got nesting--but no timestamps from `r.`  I had to alias these in the query and restore their names with `addCategory`. Return now looked good--but only then did I notice that it only returned one review.  Nixing `.first()`[3] fixed quantity but messed up structure.  Mapping the array[4] correctly applied `addCategory`, which works as expected on a single object--not an array. */

module.exports = {
  list,
  read,
  listTheatersForMovie,
  listReviewsForMovie,
};

// Cf. lesson 5.6.9 especially
