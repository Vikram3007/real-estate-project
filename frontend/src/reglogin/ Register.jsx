import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import { FaGoogle, FaInstagram, FaFacebook } from "react-icons/fa";

// GlassButton component – reusable button with glass effect
const GlassButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white/20 backdrop-blur-md border border-white/40 text-white font-bold py-2 rounded-xl hover:bg-white/30 transition"
  >
    {children}
  </button>
);

const Register = () => {
  const navigate = useNavigate(); // React Router navigation hook
  const [isLogin, setIsLogin] = useState(true); // toggle between Login and Register

  // State for register form and login form
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ text: "", color: "" }); // message status for user feedback

  // 🔹 Effect: if user already has a token, redirect to home
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home"); // go to home page if already logged in
    }
    localStorage.clear(); // clear token if present
  }, []);

  // Input change handlers
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value }); // update register form
  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value }); // update login form

  // 🔹 Register user
  const handleRegister = async () => {
    try {
      const res = await API.post("/users/register", form); // call backend API
      setStatus({ text: res.data.message || "Register Success", color: "yellow" });
      setIsLogin(true); // switch to login after successful register
    } catch (err) {
      setStatus({ text: err.response?.data?.message || "Register failed", color: "red" });
    }
  };

  // 🔹 Login user
  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", loginData); // call backend API
      localStorage.setItem("token", res.data.token); // save token in localStorage
      setStatus({ text: "Login Success", color: "yellow" });
      navigate("/home"); // redirect to home page after login
    } catch (err) {
      setStatus({ text: err.response?.data?.message || "Login failed", color: "red" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 p-4">
      <div className="w-[360px] bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6">

        {/* Status message for feedback */}
        {status.text && (
          <div className={`mb-4 text-center font-bold py-2 rounded-full ${
            status.color === "red" ? "bg-red-600 text-white" : "bg-yellow-400 text-black"
          }`}>
            {status.text}
          </div>
        )}

        {/* Conditional rendering for Login / Register */}
        {isLogin ? (
          <>
            <h2 className="text-2xl font-bold text-center text-white mb-4">Login</h2>
            {/* Email input */}
            <input name="email" placeholder="Email" onChange={handleLoginChange}
              className="w-full mb-3 bg-transparent border-b text-white outline-none" />
            {/* Password input */}
            <input type="password" name="password" placeholder="Password" onChange={handleLoginChange}
              className="w-full mb-4 bg-transparent border-b text-white outline-none" />
            {/* Login button */}
            <GlassButton onClick={handleLogin}>Login</GlassButton>
            {/* Switch to Register */}
            <p className="text-center mt-3 text-white underline cursor-pointer"
               onClick={() => setIsLogin(false)}>Create new account</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-white mb-4">Register</h2>
            {/* Name input */}
            <input name="name" placeholder="Name" onChange={handleChange}
              className="w-full mb-3 bg-transparent border-b text-white outline-none" />
            {/* Email input */}
            <input name="email" placeholder="Email" onChange={handleChange}
              className="w-full mb-3 bg-transparent border-b text-white outline-none" />
            {/* Password input */}
            <input type="password" name="password" placeholder="Password" onChange={handleChange}
              className="w-full mb-4 bg-transparent border-b text-white outline-none" />
            {/* Register button */}
            <GlassButton onClick={handleRegister}>Register</GlassButton>
            {/* Switch to Login */}
            <p className="text-center mt-3 text-white underline cursor-pointer"
               onClick={() => setIsLogin(true)}>Already have account?</p>
          </>
        )}

        {/* Social login icons (just visual, no logic) */}
        <div className="flex justify-center gap-4 mt-5">
          <FaGoogle className="text-red-500" />
          <FaInstagram className="text-pink-500" />
          <FaFacebook className="text-blue-600" />
        </div>

      </div>
    </div>
  );
};

export default Register;
