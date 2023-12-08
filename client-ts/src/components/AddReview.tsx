import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postReviews } from '../apiService';
import StarRating from './StarRating';
import { Review } from '../types';

interface FormState {
  inputValues: Review;
}

const AddReview = () => {
  const [inputValues, setInputValues] = useState<FormState['inputValues']>({
    name: '',
    score: 0,
    comment: '',
    reviews: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const reviewObj = {
    ...inputValues,
  };

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    postReviews(reviewObj).then((newReview) => {
      setInputValues({
        name: '',
        score: 0,
        comment: '',
        reviews: newReview,
      });

      toast.success('Review submitted!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  }

  const setRating = (newScore: number) => {
    setInputValues({
      ...inputValues,
      score: newScore,
    });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="rating-form-container">
        <div className="rating-form-control">
          <label>
            Name:
            <input
              id="name"
              type="text"
              required={true}
              placeholder=""
              value={inputValues.name}
              name="name"
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="rating-form-control">
          <label>
            Rating:
            <StarRating rating={inputValues.score} setRating={setRating} />
          </label>
        </div>
        <div className="rating-form-control">
          <label>
            Comments:
            <textarea
              id="comments"
              required={true}
              placeholder=""
              value={inputValues.comment}
              onChange={handleChange}
              name="comment"
            />
          </label>
        </div>
        <input id="reviewSubmit" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddReview;
