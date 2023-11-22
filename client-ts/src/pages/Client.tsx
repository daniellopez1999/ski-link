import { useEffect } from "react";
import LessonList from "../components/LessonList";
import { getClientLessons } from "../apiService";
import { useState } from "react";
import NavBar from "../components/NavBar";
import { Lesson } from "../types";
import { useNavigate } from "react-router-dom";
import sortLessons from "../utils/sortLessons";

const Client = () => {
  let navigate = useNavigate();

  const [lessons, setLessons] = useState<Lesson[]>([]);

  const email = localStorage.getItem('email');
  useEffect(() => {
    if (!email) {
      navigate('/')
    }
  })

  useEffect(() => {
    getClientLessons(email).then((data) => {
      setLessons(sortLessons(data));
    });
  }, [email]);

  return (
    <div className="Client">
      <NavBar />

      <div className="client-dashboard-container">
        <div className="client-header">
          <h5>Client Dashboard</h5>
        </div>

        <LessonList
          lessons={lessons}
          setLessons={setLessons}
          isClientView={true}
        />
      </div>
    </div>
  );
};

export default Client