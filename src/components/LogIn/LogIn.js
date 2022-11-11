import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const formHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="form-container">
          <h2>Log In</h2>
          <form onSubmit={formHandler} className="login-in-form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="password"
            />
            <button type="submit">Log In</button>
          </form>
          <p>
            Dont have an account?{" "}
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
