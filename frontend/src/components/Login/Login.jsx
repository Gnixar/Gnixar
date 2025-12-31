import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../utlis";
import "./Login.css";
import Signup from "../Signup/Signup";

const Login = ({ onClose, onLoginSuccess }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginInfo.email || !loginInfo.password) {
      return handleError("Email and password required");
    }

    try {
      const response = await fetch("https://gnixar-bacend.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();

      if (result.success) {
        handleSuccess("Login successful");

        // ✅ backend must return username
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));

        onLoginSuccess(result.user);
        setIsOpen(false);
        onClose();
      } else {
        handleError(result.message || "Login failed");
      }
    } catch (error) {
      handleError(error.message);
    }
  };

  if (showSignup) {
    return <Signup switchToLogin={() => setShowSignup(false)} />;
  }

  return (
    <div className="login-backdrop">
      <div className="login-modal" role="dialog" aria-modal="true">
        <button
          className="login-close-btn"
          onClick={() => {
            setIsOpen(false);
            onClose();
          }}
        >
          ×
        </button>

        <h1 className="login-title">Login</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-row">
            <label>Email</label>
            <input
              className="login-input"
              type="email"
              name="email"
              value={loginInfo.email}
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
              value={loginInfo.password}
              onChange={handleChange}
              placeholder="Enter password..."
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>

          <span className="login-footer">
            Don't have an account?
            <button
              className="login-switch"
              type="button"
              onClick={() => setShowSignup(true)}
            >
              Signup
            </button>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
