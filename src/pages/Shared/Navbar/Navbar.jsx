import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import cartImg from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png"
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EEFF25]" : ""}`
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact-us"}
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EEFF25]" : ""}`
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EEFF25]" : ""}`
          }
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/our-menu"}
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EEFF25]" : ""}`
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/our-shop"}
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-[#EEFF25]" : ""}`
          }
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-black bg-opacity-30 py-4 md:pt-8 md:pb-6 text-white justify-between max-w-screen-xl mx-auto">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black/50 rounded-none z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl">
          <p className="uppercase text-3xl font-bold">Bestro Boss</p>
          <p className="uppercase text-2xl tracking-widest">Restaurant</p>
          </a>
          
        </div>

        <div className="">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <a href="">
            <img src={cartImg} className="w-12 mr-5" alt="" />
          </a>
          <a className=" flex items-center font-bold uppercase gap-1">Sign Out <FaUserCircle className="text-3xl" /></a>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
