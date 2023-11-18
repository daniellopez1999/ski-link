import { useState } from "react";
import { getWeather, postLessons } from "../apiService";
import { ToastContainer, toast } from "react-toastify";
import { Lesson } from "../types";
import "react-toastify/dist/ReactToastify.css";

interface FormState {
  inputValues: Lesson;
}

const AddLesson = () => {

  const [inputValues, setInputValues] = useState<FormState['inputValues']>({
    name: '',
    resort: '',
    level: '',
    date: '',
    lessons: [],
    weather: [],
    email:'',
  })



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { // solo podrá recibir cosas de HTMLInputElement y HTMLTextAreaElement (input normal o text area input)
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value //e.target.name coge el name del input

    })
    console.log(inputValues);

  }

  const handleResortChange = async (selectedResort: string) => {
    setInputValues({
      ...inputValues,
      resort: selectedResort
    });
    if (selectedResort) {
      try {
        console.log('SELECTED RESORT: ', selectedResort)
        const weatherData = await getWeather(selectedResort);
        setInputValues({
          ...inputValues,
          weather: weatherData.list,
          resort: selectedResort
        });
        console.log('AFTER TRY HANDLE RESORT CHANGE', inputValues)
      } catch (err) {
        console.log(err);
      }
    }
  };

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();

    let getEmailFromLS = localStorage.getItem('email') || '';
    const lessonObj = {
      ...inputValues,
      email: getEmailFromLS
    }

    postLessons(lessonObj).then((newLesson) => {
      console.log(newLesson)
      setInputValues({
        ...inputValues,
        lessons: newLesson,
      })
      //setLessons((prev) => [...prev, newLesson]);
      toast.success("Lesson request successful!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(inputValues)
      console.log(newLesson)
    });
  }




  return (
    <>
      <h1>dsadasd</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="lesson-booking-form-container">
        <div className="form-elements">
          <div className="form-control">
            <label>
              Name:
              <input
                type="text"
                required={true}
                placeholder="Insert name here..."
                value={inputValues.name}
                onChange={handleChange}
                name="name"
              />
            </label>
          </div>
          <div className="form-control">
            <label>
              Select a resort:
              <select
                value={inputValues.resort}
                name="resort"
                onChange={(e) => handleResortChange(e.target.value)}
              >
                <option> </option>
                <option value="Arapahoe">Arapahoe</option>
                <option value="Aspen">Aspen</option>
                <option value="Breckenridge">Breckenridge</option>
                <option value="Keystone">Keystone</option>
                <option value="Vail">Vail</option>
              </select>
            </label>
          </div>

          <div className="form-control">
            <label>
              Lesson type:
              <select value={inputValues.level} onChange={handleChange} name="level">
                <option> </option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
          </div>

          <div className="form-control">
            <label>
              Date:
              <input
                type="date"
                required={true}
                value={inputValues.date}
                onChange={handleChange}
                name="date"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>
      {/* <WeatherDisplay weather={weather} /> */}
    </>
  );
};

export default AddLesson;