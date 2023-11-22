const { Lesson } = require("../models/model");

exports.getClientLessons = async (req, res) => {
  try {
    const email = req.params.email;
    const lessons = await Lesson.find({ email: email });
    if (email) {
      res.json(lessons);
    } else {
      res.json([]);
    }
  } catch (err) {
    res.sendStatus(404);
  }
};