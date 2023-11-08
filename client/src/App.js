import { useEffect } from "react";
import LessonList from "./components/LessonList";
import { getLessons } from "./apiService";
import { useState } from "react";
import AddLesson from "./components/AddLesson";

function App() {
  const [lessons, setLessons] = useState([]); 

  useEffect(() => {
    getLessons().then((data) => {
      setLessons(data);
    })
  }, [])


  return (
    <div className="App">
      <AddLesson setLessons={setLessons} />
      <LessonList lessons={lessons} setLessons={setLessons}/>
    </div>
  );
}

export default App;