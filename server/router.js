const router = require('express').Router();
const dashboardController = require('./controllers/dashboard');
const loginsController = require('./controllers/logins')
const clientController = require('./controllers/client')

const ratingController = require('./controllers/rating')


// routes: logins 

router.post("/login/", loginsController.postLogin);

router.post("/instructor_login", loginsController.instructorLogin);

//routes: register

router.post('/register', loginsController.registerUser);
router.post('/register_instructor', loginsController.registerInstructor);


// routes: client dashboard 

router.get("/lessons/:email", clientController.getClientLessons);

// routes: instructor dashboard 

router.get("/lessons", dashboardController.getLessons);

router.post("/lessons", dashboardController.postLessons);

router.put("/lessons/:id/accept", dashboardController.acceptLessons);

router.put("/lessons/:id/reject", dashboardController.rejectLessons);

router.put("/lessons/:lessonid/:email", dashboardController.addLessonToInstructor)

// routes: ratings 

router.post("/reviews", ratingController.postRatings);

router.get("/reviews", ratingController.getRatings);


module.exports = router;
