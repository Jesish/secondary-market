import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../API/Auth"; // adjust import path

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });

      // Optionally store token
      localStorage.setItem("token", response.access); // or whatever your API returns

      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      alert("Login failed: " + error.message); // Show error if login fails
    }
  };

  return (
    <div className="flex min-h-screen font-sans">
      {/* Left Side */}
      <div
        className="w-1/2 hidden md:flex bg-cover bg-center items-center justify-center text-white text-5xl font-extrabold p-10"
        style={{ backgroundImage: "url('/images/ls.png')" }}
      ></div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#fdf8f4] p-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md animate-fade-in-down border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Welcome Back
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md transition font-semibold"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-amber-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
