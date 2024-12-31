import React from 'react';
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
const SignUp = () => {
    return (
        <div
        className="hero min-h-screen text-[#444444] absolute left-0 px-40"
        style={{
          backgroundImage: `url("${bgImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content flex-col shadow-custom-dark lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card w-full max-w-md shrink-0 ">
            <form className="card-body">
              <h2 className="text-center text-[40px] font-bold mb-5 text-[#151515]">
                Sign Up
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control mt-6">
                <button
              
                  className="btn rounded-lg text-white font-bold bg-[rgba(209,160,84,0.7)] mb-2"
                >
                  Sign Up
                </button>
              </div>
  
              <p className="text-[#d1a054] text-center text-lg">
                Already registered?{" "}
                <Link to={"/login"} className="font-semibold">
                  Go to log in
                </Link>
              </p>
              <p className="text-center my-4 text-xl font-medium text-[#444444]">
                Or sign up with
              </p>
              <div className="text-5xl text-[#444444] justify-center flex gap-10 items-center">
                <FaFacebookF className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black" />
                <FaGoogle className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black" />
                <FaGithub className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;