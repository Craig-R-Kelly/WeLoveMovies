const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

// (see notes on configuring reduceProperties function in same file)
const reduceMovies = reduceProperties("theater_id", {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
  rating: ["movies", null, "rating"],
  description: ["movies", null, "description"],
  image_url: ["movies", null, "image_url"],
  movie_created_at: ["movies", null, "created_at"],
  movie_updated_at: ["movies", null, "updated_at"],
  is_showing: ["movies", null, "is_showing"],
  mt_theater_id: ["movies", null, "theater_id"]
});

//  GET /theaters
//  returns complex list all theaters  */
function listTheatersWithMovies() {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select(
      "t.*",
      "m.movie_id",
      "m.title",
      "m.runtime_in_minutes",
      "m.rating",
      "m.description",
      "m.image_url",
      "m.created_at as movie_created_at",
      "m.updated_at as movie_updated_at",
      "mt.is_showing",
      "mt.theater_id as mt_theater_id"
    )
    .then((data) => reduceMovies(data));
}

module.exports = {
  listTheatersWithMovies
};
