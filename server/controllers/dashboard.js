const { Lesson, Instructor } = require("../models/model");

exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.status(201);
    res.json(lessons);
  } catch (err) {
    console.log("err", err);
    res.sendStatus(404);
  }
};

exports.postLessons = async (req, res) => {
  try {
    const newLesson = req.body;
    const createdLesson = await Lesson.create(newLesson);
    res.status(201);
    res.json(createdLesson);
  } catch (err) {
    console.log("err", err);
    res.sendStatus(404);
  }
};

exports.acceptLessons = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    lesson.status = "ACCEPTED";
    await lesson.save();
    res.json(lesson);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Server Error");
  }
};

exports.addLessonToInstructor = async (req,res) => {
  const {lessonid, email} = req.params
  try {
    const instructor = await Instructor.findOne({email: email})
    instructor.acceptedLessons.push(lessonid)
    const updatedInstructor = await instructor.save();
    res.status(200).json({message: 'Lesson added to instructor', instructor: updatedInstructor})
  } catch (error) {
    res.status(500).json({message: error})
  }
}

exports.rejectLessons = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    lesson.status = "REJECTED";
    await lesson.save();
    res.json(lesson);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("Server Error");
  }
};


