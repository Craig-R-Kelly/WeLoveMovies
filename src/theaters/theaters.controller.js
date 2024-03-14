const theatersService = require("./theaters.service");

//  GET /theaters
async function listTheatersWithMovies(req, res) {
  const theaters = await theatersService.listTheatersWithMovies(req);
  res.json({ data: theaters });
}

module.exports = {
  listTheatersWithMovies
};
