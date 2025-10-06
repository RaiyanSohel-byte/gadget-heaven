import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="navbar max-w-[1280px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#9538E2] font-bold" : ""}`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#9538E2] font-bold" : ""}`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-[#9538E2] font-bold" : ""}`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#9538E2] font-bold" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#9538E2] font-bold" : ""}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-[#9538E2] font-bold" : ""}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) =>
            `w-[40px] h-[40px] rounded-[50%] ${
              isActive ? "bg-purple-600 text-white" : "border border-gray-300"
            } flex justify-center items-center`
          }
        >
          <ShoppingCart size={16} />
        </NavLink>
        <NavLink
          to="/dashboard/wishlist"
          className={({ isActive }) =>
            `w-[40px] h-[40px] rounded-[50%] ${
              isActive ? "bg-purple-600 text-white" : "border border-gray-300"
            } flex justify-center items-center`
          }
        >
          <Heart size={16} />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
