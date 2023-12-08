import { useState } from 'react';
import { getWeather, postLessons } from '../apiService';
import { ToastContainer, toast } from 'react-toastify';
import { Lesson } from '../types';
import 'react-toastify/dist/ReactToastify.css';

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
    email: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleResortChange = async (selectedResort: string) => {
    setInputValues({
      ...inputValues,
      resort: selectedResort,
    });
    if (selectedResort) {
      try {
        const weatherData = await getWeather(selectedResort);
        setInputValues({
          ...inputValues,
          weather: weatherData.list,
          resort: selectedResort,
        });
      } catch (err) {
        console.error(err);
      }
    }
  };

  const isDateValid = (date: string) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate >= today;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isDateValid(inputValues.date)) {
      toast.error('Cannot book lessons for past dates!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    let getEmailFromLS = localStorage.getItem('email') || '';
    const lessonObj = {
      ...inputValues,
      email: getEmailFromLS,
    };

    postLessons(lessonObj).then(() => {
      setInputValues({
        name: '',
        resort: '',
        level: '',
        date: '',
        lessons: [],
        weather: [],
        email: '',
      });

      toast.success('Lesson request successful!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };

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
              <select
                value={inputValues.level}
                onChange={handleChange}
                name="level"
              >
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
                // type="date"
                type="datetime-local"
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
    </>
  );
};

export default AddLesson;
