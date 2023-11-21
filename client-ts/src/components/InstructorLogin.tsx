import { useState } from "react";
import { postInstructorLogin } from "../apiService";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/SkiLink_logo.png";

const InstructorLogin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const instructorObj = { email, password };
    const response = await postInstructorLogin(instructorObj);

    if (response.message) {
      localStorage.setItem('instructor_email', email)
      navigate("/dashboard");
    } else {
      alert("login failed");
      console.error("Login failed");
    }
  };

  return (
    <div className="customer-login-container">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <div className="login-image">
          <img src={logo} alt="SkiLink Logo" height={50} width={163}></img>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required={true}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required={true}
        />
        <button className="customer-login" type="submit">Login</button>
        <Link className="register-btn" to="/register_instructor">
          <button className="register-inner-btn" type="submit">Register</button>
        </Link>
      </form>
    </div>
  );
};

export default InstructorLogin;
