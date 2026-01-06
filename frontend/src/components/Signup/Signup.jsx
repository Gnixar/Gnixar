import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utlis";
import "./Signup.css";

const Signup = ({ switchToLogin }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { username, email, password } = data;

    if (!username || !email || !password) {
      return handleError("All fields required");
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        handleSuccess("Signup successful, please login");
        switchToLogin();
      } else {
        handleError(result.message || "Signup failed");
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  return (
    <div className="login-backdrop">
      <div className="login-modal">
        <button
          className="login-close-btn"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <h1 className="login-title">Signup</h1>

        <form className="login-form" onSubmit={handleSignup}>
          <div className="login-row">
            <label>Username</label>
            <input
              className="login-input"
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              placeholder="Enter username..."
            />
          </div>

          <div className="login-row">
            <label>Email</label>
            <input
              className="login-input"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter email..."
            />
          </div>

          <div className="login-row">
            <label>Password</label>
            <input
              className="login-input"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Enter password..."
            />
          </div>

          <button className="login-btn" type="submit">
            Signup
          </button>

          <span className="login-footer">
            Already have an account?
            <button
              className="login-switch"
              type="button"
              onClick={switchToLogin}
            >
              Login
            </button>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
