import React from "react";
import { useNavigate } from "react-router-dom";
import homepic from "../../images/homepic.jpg";
import "./homepage.css";
const HomePage = () => {
  const navigate = useNavigate();

  function handleLogin(event) {
    navigate("/loginpage");
  }
  function handleRegister(event) {
    navigate("/registerpage");
  }
  return (
    <header>
      <div className="parent" style={{ position: "relative" }}>
        <div>
          <img
            src={homepic}
            alt=""
            className="homepic"
            style={{
              objectFit: "cover",
              height: "100vh",
              width: "100vw",
              overflowX: "hidden",
              overflowY: "hidden",
            }}
          />
        </div>
        <div className="text">
          <p>Let's get you a ride...</p>
          <button onClick={handleLogin} className="login">
            Sign In
          </button>
          <button onClick={handleRegister} className="register">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
