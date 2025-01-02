import React from "react";
import {
    FaBars,
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul>
          <li>
            <NavLink
              to={"/dashboard/user-home"}
              className="flex items-center uppercase"
            >
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/reservation"}
              className="flex items-center uppercase"
            >
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/payment-history"}
              className="flex items-center uppercase"
            >
              <FaWallet /> payment history
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/my-cart"}
              className={`flex items-center uppercase`}
            >
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/add-review"}
              className="flex items-center uppercase"
            >
              <MdReviews /> add review
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/dashboard/my-booking"}
              className="flex items-center uppercase"
            >
              <FaCalendarCheck /> my booking
            </NavLink>
          </li>
          <div className="divider divider-accent px-4"></div>

          <li>
            <NavLink to={"/"} className="flex items-center uppercase">
              <FaHome /> home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"} className="flex items-center uppercase">
              <FaBars /> Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
