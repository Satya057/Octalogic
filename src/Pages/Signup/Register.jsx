import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
    } else if (pass === "") {
      alert("Password is required");
    } else {
      localStorage.setItem("email", email);
      localStorage.setItem("pass", pass);
      alert("Registered Successfully");
      navigate("/");
    }
  };
  console.log("hjdhw");
  return (
  
    <div className="register-container">
      <div className="register-content">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZu9YYxGZL8zDlqs6Nd3ifIFrOrk2AD9upvffkzxF38w&s"
          alt="Company Logo"
        />
        <h2 className="register-heading">Register Your Account</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="input-field"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button type="submit" className="register-button">
            Sign in
          </button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
