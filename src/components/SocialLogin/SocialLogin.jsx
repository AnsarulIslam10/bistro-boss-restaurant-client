import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then((result) => {
      console.log(result.user);
    }).catch(err => console.log(err))
  };
  return (
    <div className="text-5xl text-[#444444] justify-center flex gap-10 items-center">
      <FaFacebookF className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black" />

      <FaGoogle onClick={handleGoogleSignIn} className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black" />

      <FaGithub className="rounded-full cursor-pointer hover:scale-110 transition-all duration-300 p-2 border border-black" />
    </div>
  );
};

export default SocialLogin;
