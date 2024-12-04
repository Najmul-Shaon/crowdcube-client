import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import TypeWriter from "../Components/TypeWriter";

const Login = () => {
  // const emailRef = useRef();

  // const { userLoginWithEmailAndPass, setUser, auth, setEmail } =
  //   useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  // const provider = new GoogleAuthProvider();
  // const location = useLocation();
  // const navigate = useNavigate();

  // const logInWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       setUser(result.user);
  //       toast.success("Welcome!");
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       const errorMsg = error.message;
  //       toast.error(errorMsg);
  //     });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const form = new FormData(e.target);
  //   const email = form.get("email");
  //   const password = form.get("password");

  //   userLoginWithEmailAndPass(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       toast.success("Welcome!");
  //       setUser(user);
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       toast.error(errorMessage);
  //     });
  // };

  // const handleForget = (emailRef) => {
  //   setEmail(emailRef.current.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen mt-24 p-8">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <span className="text-2xl font-bold text-center mt-4 text-green-400">
            <TypeWriter content={" "} written={["Login Now"]}></TypeWriter>
          </span>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              {/* <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              /> */}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className="absolute right-6 top-12"
              >
                {showPass ? (
                  <FaEyeSlash></FaEyeSlash>
                ) : (
                  <MdOutlineRemoveRedEye></MdOutlineRemoveRedEye>
                )}
              </button>
              <label className="label">
                {/* <Link
                  to="/forgetPass"
                  onClick={() => {
                    handleForget(email);
                  }}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link> */}
                <Link
                  to="/forgetPass"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
                {/* <Link
                  to="/forgetPass"
                  onClick={() => {
                    handleForget(emailRef);
                  }}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link> */}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-lg text-white bg-green-400 hover:bg-green-300">
                Login
              </button>
            </div>
            <p>
              New here?
              <Link to="/signup" className="text-red-400 mx-2">
                Sign Up
              </Link>
            </p>
          </form>
          <div className="flex justify-center">
            <p className="text-2xl text-green-400">or</p>
          </div>
          <div className="flex flex-col items-center pb-4 space-y-4">
            <h2 className="text-2xl font-bold text-center mt-4 text-green-400">
              Login with Google
            </h2>
            <button className="btn text-2xl text-[#4285F4]">
              <FaGoogle></FaGoogle>
            </button>
            {/* <button
              onClick={logInWithGoogle}
              className="btn text-2xl text-[#4285F4]"
            >
              <FaGoogle></FaGoogle>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
