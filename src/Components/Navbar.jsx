// --- src/components/Navbar.jsx ---
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-amber-600">
          ThriftTreasure
        </Link>
        <div className="hidden md:flex gap-6 text-gray-700">
          <Link to="/" className="hover:text-amber-600">
            Home
          </Link>
          <Link to="/shop" className="hover:text-amber-600">
            Shop
          </Link>
          <Link to="/sell" className="hover:text-amber-600">
            Sell
          </Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:text-amber-600">
                Login
              </Link>
              <Link to="/signup" className="hover:text-amber-600">
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="hover:text-amber-600">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-amber-600 bg-transparent border-none cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
