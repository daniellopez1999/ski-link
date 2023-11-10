import { getWeather } from "../apiService";
import AddLesson from "../components/AddLesson"
import NavBar from "../components/NavBar"

import { useState, useEffect } from "react";
import WeatherDisplay from "../components/WeatherDisplay";
import Footer from "../components/Footer"




const SkiLesson = () => {

  return (
      <div>
        <NavBar></NavBar>
        <AddLesson />
        <div className="ski-lesson-content-container">
          <div className="individual-content-container">
            <h3> Beginner Ski Lessons </h3>
              <p> Embark on your skiing adventure with our beginner ski lessons! Perfect for those who have never skied before or are reacquainting themselves with the snow after a long time. Our patient and certified instructors will guide you through the basics of skiing, including how to safely put on and take off your skis, mastering the art of the pizza slice (snowplow stop), and the foundational techniques of turning and controlling your speed.  </p>
          </div>
          
          <div className="individual-content-container">
            <h3> Intermediate Ski Lessons </h3>
              <p> Take your skiing to the next level with our intermediate ski lessons. Tailored for those who are comfortable with the basics. Our lessons focus on refining your techniques, introducing parallel turns, and exploring varied terrains. You'll learn to ski with more precision and control, allowing for a smoother ride down more challenging slopes.   </p>
          </div>

          <div className="individual-content-container">
            <h3> Advanced Ski Lessons </h3>
              <p> These sessions are crafted for those who can confidently navigate red runs and are ready to conquer black diamond slopes. Our advanced curriculum includes techniques for skiing in powder, mastering moguls, and perfecting short-radius turns. Our instructors will help you fine-tune your form, optimize your control at high speeds, and introduce dynamic skiing techniques.  </p>
          </div>
        </div>

    <Footer> </Footer>


      </div>
    )
  }
  
  export default SkiLesson