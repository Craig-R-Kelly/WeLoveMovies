const moviesService = require("./movies.service");

// validation

function validMovieId(req, res, next) {
  const movieId = req.params.movieId;
  if (!(Number.isInteger(Number(movieId)) && Number(movieId) > 0)) {
    return res
      .status(400)
      .json({ error: "Movie ID must be a positive integer." });
  }
  next();
}

async function movieExists(req, res, next) {
  const movieId = req.params.movieId;
  const movie = await moviesService.read(movieId);
  if (!movie) {
    return next({ status: 404, message: "Movie cannot be found." });
  }
  res.locals.movie = movie;
  next();
}

//  CRUD operations

//  GET /movies
//  returning all--or only each which is_showing  */
async function listMovies(req, res) {
  const movies = await moviesService.list(req);
  res.json({ data: movies });
}

//  GET /movies/:movieId
async function readMovie(req, res) {
  res.json({ data: res.locals.movie });
}

//  GET /movies/:movieId/theaters
async function listTheatersForMovieId(req, res) {
  const movieId = req.params.movieId;
  const theaters = await moviesService.listTheatersForMovie(movieId);
  res.json({ data: theaters });
}

//  GET /movies/:movieId/reviews
async function listReviewsForMovieId(req, res) {
  const movieId = req.params.movieId;
  const reviews = await moviesService.listReviewsForMovie(movieId);
  res.json({ data: reviews });
}

module.exports = {
  listMovies,
  readMovie: [validMovieId, movieExists, readMovie],
  listTheatersForMovieId: [validMovieId, movieExists, listTheatersForMovieId],
  listReviewsForMovieId: [validMovieId, movieExists, listReviewsForMovieId],
};
