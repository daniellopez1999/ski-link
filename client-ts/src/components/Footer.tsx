import logo from "../images/SkiLink_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={logo} alt="SkiLink Logo" height={50} width={163}></img>
      </div>
      <ul className="footer-menu">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/skilesson">Ski Lessons</Link>
        </span>
        <span>
          <Link to="/instructor">Instructor</Link>
        </span>
        <span>
          <Link to="/client">Client</Link>
        </span>
      </ul>
    </div>
  );
};

export default Footer;

