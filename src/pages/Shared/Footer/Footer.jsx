import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 sm:grid-cols-2 text-neutral-content bg-[#111827]">
        <aside className="bg-[#1F2937] p-6 sm:p-10 md:p-24 flex flex-col justify-center items-center text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl uppercase mb-6">Contact Us</h2>
          <div className="text-sm sm:text-lg md:text-xl space-y-3">
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </aside>
        <aside className="text-center flex flex-col justify-center items-center p-6 sm:p-10 md:p-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl">Follow Us</h2>
          <p className="text-sm sm:text-lg md:text-xl">Join us on social media</p>
          <div className="flex justify-center items-center text-xl mt-3 gap-3">
            <FaFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div>
        </aside>
      </div>
      <div className="footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="text-xs sm:text-sm md:text-lg">
            Copyright © {new Date().getFullYear()} - CulinaryCloud. All rights
            reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
