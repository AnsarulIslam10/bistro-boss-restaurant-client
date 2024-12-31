import { Link } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const captchaRef = useRef();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
  };

  const handleValidateCaptch = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

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
      <div className="hero-content flex-col shadow-custom-dark lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card w-full max-w-sm shrink-0 ">
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-center text-[40px] font-bold mb-5 text-[#151515]">
              Login
            </h2>
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
            <div className="form-control">
              <LoadCanvasTemplate />
              <input
                ref={captchaRef}
                type="text"
                placeholder="Type here"
                name="captcha"
                className="input rounded-b-none input-bordered focus:outline-none"
                required
                onBlur={handleValidateCaptch}
              />
              {/* <button
                onClick={handleValidateCaptch}
                className="btn btn-outline border-none hover:bg-[rgba(184,140,74,0.44)] text-black bg-[rgba(209,159,84,0.52)] btn-xs rounded-t-none"
              >
                Verify
              </button> */}
            </div>
            <div className="form-control mt-6">
              <button
                disabled={disabled}
                className="btn rounded-lg text-white font-bold bg-[rgba(209,160,84,0.7)] mb-2"
              >
                Login
              </button>
            </div>

            <p className="text-[#d1a054] text-center text-lg">
              New here?{" "}
              <Link to={"/register"} className="font-semibold">
                Create a New Account
              </Link>
            </p>
            <p className="text-center my-4 text-xl font-medium text-[#444444]">
              Or sign in with
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

export default Login;
