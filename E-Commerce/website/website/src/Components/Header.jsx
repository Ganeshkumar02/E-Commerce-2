import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import "tailwindcss/tailwind.css";

function Header() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [logos, setLogos] = useState([]);

  const fetchLogos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/logo/logo");
      setLogos(response.data.logos);
    } catch (error) {
      alert("Error: Failed to fetch logos");
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartQuantity(cartItems.length);

    const handleStorageChange = () => {
      const updatedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartQuantity(updatedCartItems.length);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const logoImage = logos.length > 0 ? logos[0].logoImage : "";

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {logoImage && (
            <NavLink to="/home" className="text-white">
              <img
                src={`http://localhost:3000/uploads/${logoImage}`}
                alt={logos[0]?.logoname}
                className="h-10 w-10 rounded-full"
              />
            </NavLink>
          )}
        </div>

        {/* Navigation Links */}
        <div className="w-full lg:w-auto flex flex-wrap justify-center space-x-6 mt-4 lg:mt-0">
          {[
            { to: "/home", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" },
            { to: "/mens", label: "Men's" },
            { to: "/womens", label: "Women's" },
            { to: "/fruits", label: "Fruits" },
            { to: "/dryfruits", label: "Dry Fruits" },
            { to: "/allproduct", label: "All Products" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="relative text-white font-normal group hover:font-bold transition-all"
            >
              {item.label}
              <span
                className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-red-500 transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"
              ></span>
            </NavLink>
          ))}
        </div>

        {/* Search and Cart */}
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          {/* Search Box */}
          <form
            className="flex flex-grow max-w-xs"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              placeholder="Search..."
              className=" text-zinc-950 px-4 py-2 rounded-full w-full border border-gray-300 focus:outline-none focus:ring focus:ring-gray-500"
              aria-label="Search"
            />
          </form>

          {/* Cart Icon */}
          <div className="relative flex items-center">
            <NavLink to="/cart" className="flex items-center text-white">
              <FaShoppingCart className="text-white text-xl" />
              <span className="ml-2 hidden lg:inline">Cart</span>
              {cartQuantity > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {cartQuantity}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
