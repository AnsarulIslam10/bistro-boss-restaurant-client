import React from "react";
import {
  FaBars,
  FaBook,
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaShoppingCart,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { GrContact } from "react-icons/gr";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const navLinkStyles = ({ isActive }) => 
    `flex items-center uppercase ${isActive ? "text-white" : "text-black"}`;

  return (
    <div className="flex absolute left-0 w-full mx-auto">
      <div className="w-72 h-screen bg-[#D1A054] px-4 py-4 fixed">
        <ul className="space-y-3">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home" className={navLinkStyles}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-items" className={navLinkStyles}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items" className={navLinkStyles}>
                  <FaBars /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-bookings" className={navLinkStyles}>
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users" className={navLinkStyles}>
                  <MdReviews /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/user-home" className={navLinkStyles}>
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation" className={navLinkStyles}>
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history" className={navLinkStyles}>
                  <FaWallet /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-cart" className={navLinkStyles}>
                  <FaShoppingCart /> My Cart{" "}
                  <span className="badge badge-sm badge-primary ml-1">
                    {cart.length}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review" className={navLinkStyles}>
                  <MdReviews /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-booking" className={navLinkStyles}>
                  <FaCalendarCheck /> My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider divider-accent px-4"></div>
          <li>
            <NavLink to="/" className={navLinkStyles}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className={navLinkStyles}>
              <FaBars /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact" className={navLinkStyles}>
              <GrContact /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 ml-72 overflow-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
