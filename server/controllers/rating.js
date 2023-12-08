const { Rating } = require('../models/model');

exports.postRatings = async (req, res) => {
  try {
    const newRating = req.body;
    const createdRating = await Rating.create(newRating);
    res.status(201);
    res.json(createdRating).status(200);
  } catch (err) {
    res.sendStatus(404);
  }
};

exports.getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(201);
    res.json(ratings).status(200);
  } catch (err) {
    res.sendStatus(404);
  }
};
