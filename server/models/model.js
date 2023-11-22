const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/skilink";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database using Mongoose");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  resort: {
    type: String,
    enum: ["Arapahoe", "Aspen", "Breckenridge", "Keystone", "Vail"],
    required: true,
  },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "PENDING",
  },
  email: {
    type: String,
    required: true,
  }
});

const Lesson = mongoose.model("Lesson", lessonSchema);

const ratingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
});

const Rating = mongoose.model('Rating', ratingSchema);

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})
const User = mongoose.model('User', usersSchema);


const instructorsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  acceptedLessons: {
    type: [String],
    required: false,
  }
})
const Instructor = mongoose.model('Instructor', instructorsSchema);


module.exports = { Lesson, Rating, User, Instructor };
