// starter code was lines 1, 2, 4, and last

if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
// added the line above and the block below for deployment
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the We Love Movies API!' });
});

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
