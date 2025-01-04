import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-5xl text-[#444444] justify-center flex gap-10 items-center">
      <FaFacebookF className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black" />

      <FaGoogle
        onClick={handleGoogleSignIn}
        className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black"
      />

      <FaGithub className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black" />
    </div>
  );
};

export default SocialLogin;
