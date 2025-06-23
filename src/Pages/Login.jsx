import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 hidden md:flex bg-[url('https://source.unsplash.com/800x800/?thrift,clothing')] bg-cover bg-center items-center justify-center text-white text-4xl font-bold p-10">
        Thrift Treasures
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-6 animate-fade-in-down">
          <h2 className="text-3xl font-semibold text-gray-800">Welcome Back</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
