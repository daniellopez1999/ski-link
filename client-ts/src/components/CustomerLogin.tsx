import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { loginUser } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/SkiLink_logo.png";

const CustomerLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('email', email);
      navigate("/client");
    }
  }, [isLoggedIn, email, navigate]);

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
        <Link className="register-btn" to="/register">
          <button className="register-inner-btn" type="submit">Register</button>
        </Link>
      </form>
    </div>
  );
};

export default CustomerLogin;
