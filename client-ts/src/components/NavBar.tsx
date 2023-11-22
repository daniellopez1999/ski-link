import { Link } from "react-router-dom";
import logo from "../images/SkiLink_logo.png";
import { useState, useEffect } from "react";

const NavBar = () => {

  function handleLogout() {
    localStorage.removeItem('email');
    localStorage.removeItem('instructor_email');
    window.location.reload();
  }


  const instructorEmail = localStorage.getItem('instructor_email');
  const userEmail = localStorage.getItem('email')
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  function checkInstructor () {
    if (instructorEmail) {
      setUserIsLoggedIn(true);
    }
  }

  function checkIfUserLogIn () {
    if (userEmail) {
      setUserIsLoggedIn(true);
    }
  }

  useEffect(() => {
    checkInstructor();
    checkIfUserLogIn();
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="SkiLink Logo" height={50} width={163}></img>
      </div>
      <ul className="navbar-menu">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/skilesson">Ski Lessons</Link>
        </span>
        <span>
          <Link to="/reviews">Reviews</Link>
        </span>
        {userIsLoggedIn ? (
          <span>
            <Link to="/dashboard">Dashboard</Link>
          </span>
        ) : (
          <span>
            <Link to="/instructor">Instructor</Link>
          </span>
        )}
        <span>
        {userIsLoggedIn ? (<Link to="/client">Client</Link>) : (<Link to="/login">Client</Link>)}
        </span>
          
        
        <span onClick={handleLogout} id="log-out-navbar">
          <Link to="/">Logout</Link>
        </span>
      </ul>
    </div>
  );
}

export default NavBar;
