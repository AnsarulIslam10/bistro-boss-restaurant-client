import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import cartImg from "../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import { toast } from "react-toastify";
import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [cart] = useCart();

  const handleSignOut = () => {
    signOutUser();
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-bold btn btn-sm btn-ghost hover:text-yellow-300 hover:bg-transparent ${
              isActive ? " text-[#EEFF25]" : ""
            }`
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact-us"}
          className={({ isActive }) =>
            `font-bold btn btn-sm btn-ghost hover:text-yellow-300 hover:bg-transparent ${
              isActive ? " text-[#EEFF25]" : ""
            }`
          }
        >
          CONTACT US
        </NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink
            to={"/dashboard/admin-home"}
            className={({ isActive }) =>
              `font-bold btn btn-sm btn-ghost hover:text-yellow-300 hover:bg-transparent ${
                isActive ? " text-[#EEFF25]" : ""
              }`
            }
          >
            DASHBOARD
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <NavLink
            to={"/dashboard/user-home"}
            className={({ isActive }) =>
              `font-bold btn btn-sm btn-ghost hover:text-yellow-300 hover:bg-transparent ${
                isActive ? " text-[#EEFF25]" : ""
              }`
            }
          >
            DASHBOARD
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/menu"}
          className={({ isActive }) =>
            `font-bold btn btn-sm btn-ghost hover:text-yellow-300 hover:bg-transparent ${
              isActive ? " text-[#EEFF25]" : ""
            }`
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/order/salad"}
          className={({ isActive }) =>
            `font-bold btn btn-sm btn-ghost hover:text-yellow-300 hover:bg-transparent ${
              isActive ? " text-[#EEFF25]" : ""
            }`
          }
        >
          ORDER FOOD
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
            <p className="uppercase text-sm md:text-3xl font-bold">
              Bestro Boss
            </p>
            <p className="uppercase text-xs md:text-2xl tracking-widest">
              Restaurant
            </p>
          </a>
        </div>

        <div className="">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <Link to={"/dashboard/my-cart"}>
            <button className="flex items-center">
              <FaCartShopping className="text-3xl" />
              <div className="badge badge-sm mr-2 mb-4 badge-secondary">
                {cart.length}
              </div>
            </button>
          </Link>
          {user && user?.email ? (
            <>
              <button
                onClick={handleSignOut}
                className="flex cursor-pointer items-center font-bold uppercase gap-1"
              >
                Sign Out{" "}
              </button>
              <div
                className="tooltip tooltip-bottom ml-2"
                data-tip={user?.displayName}
              >
                <img
                  className="w-10 h-10 cursor-pointer rounded-full object-cover"
                  src={user?.photoURL}
                  alt=""
                  referrerPolicy="no-referrer"
                />
              </div>
            </>
          ) : (
            <Link to={"/login"} className="font-bold uppercase">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
