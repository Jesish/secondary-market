import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../API/Auth";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: signupUser,
    onSuccess: (data) => {
      alert("Signup successful! You can now login.");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ name, email, password });
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
            Create Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              required
            />
            <button
              type="submit"
              disabled={mutation.isLoading}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md transition font-semibold"
            >
              {mutation.isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-amber-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
