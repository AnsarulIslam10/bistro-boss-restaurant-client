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

  //TODO: get isadmin
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/* Dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054] px-4 py-4">
        <ul className="space-y-3">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to={"/dashboard/admin-home"}
                  className="flex items-center uppercase"
                >
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/add-items"}
                  className="flex items-center uppercase"
                >
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manage-items"}
                  className="flex items-center uppercase"
                >
                  <FaBars /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dashboard/manage-bookings"}
                  className="flex items-center uppercase"
                >
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"/dashboard/all-users"}
                  className="flex items-center uppercase"
                >
                  <MdReviews /> All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
                  <FaShoppingCart /> My Cart{" "}
                  <span className="badge badge-sm badge-primary ml-1">
                    {cart.length}
                  </span>
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
            </>
          )}

          {/* shared links */}
          <div className="divider divider-accent px-4"></div>

          <li>
            <NavLink to={"/"} className="flex items-center uppercase">
              <FaHome /> home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/order/salad"}
              className="flex items-center uppercase"
            >
              <FaBars /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/order/contact"}
              className="flex items-center uppercase"
            >
              <GrContact /> Contact
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
