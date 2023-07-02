import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const showCriteria = () => {
    const show = document.getElementById("message");
    show.style.display = "block";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/loginpage");
    alert("User registered successfully");
  };
  return (
    <div className="container shadow">
      <h2 className="text-center my-3">Sign Up Here</h2>
      <div className="col-md-12 my-3 d-flex items-center justify-content-center">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="username"
                value={input.username}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Name"
                required
                pattern="^[A-Za-z]+$"
                title="Name should contain only alphabets"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="form-control"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                onClick={showCriteria}
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Password"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="
                Password entry does not meet criteria.
                Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              />
              <div id="message">
                <b> Password must contain the following:</b>
                <p id="letter" class="invalid">
                  A <b>lowercase</b> letter
                </p>
                <p id="capital" class="invalid">
                  A <b>capital (uppercase)</b> letter
                </p>
                <p id="number" class="invalid">
                  A <b>number</b>
                </p>
                <p id="length" class="invalid">
                  Minimum <b>8 characters</b>
                </p>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={input.role}
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
                className="form-control"
                required
              >
                <option value="">None</option>
                <option value="Driver">Driver</option>
                <option value="Passenger">Passenger</option>
              </select>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
