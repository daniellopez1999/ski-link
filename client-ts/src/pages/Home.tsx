import '../App.css';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ReviewList from '../components/ReviewList';

import homeImage from "../images/homepage_img.png";

const Home = () => {

    const getUserEmail = localStorage.getItem('email')

    return (
        <div className="full-app-container">
            <NavBar />

            <div className="home-body-container">
                <img id="home-image" src={homeImage} alt="SkiLink Logo"></img>

                <div className="home-text-container">
                    <h1> Ascend to new </h1>
                    <p id="peaks"> peaks </p>
                    <p id="home-tagline"> Your alpine journey starts here </p>

                    <button id="home-booking">
                        {getUserEmail ? (<Link to="/skilesson">Book Ski Lessons</Link>) 
                        :
                        (<Link to="/login">Book Ski Lessons</Link>)}
                        
                    </button>
                </div>
            </div>

            <ReviewList />


            <Footer />
        </div>
    )
}

export default Home
