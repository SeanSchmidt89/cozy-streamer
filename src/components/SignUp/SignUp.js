import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, signUp } = UserAuth();

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div className="signup">
      <div className="signup-container">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={formHandler} className="sign-in-form">
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
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login">
              <span>login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
