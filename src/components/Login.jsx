import { useState } from "react";
import { loginBg } from "../utils/PageLinks";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="z-10 absolute h-px w-full bg-red-300"></div>
      <div>
        <img
          className="w-screen top-0 z-0 absolute"
          src={loginBg}
          alt="bg"
        ></img>
      </div>

      <form className="absolute flex flex-col left-[35%] top-[20%] gap-8 z-10 text-white">
        <h1 className="text-3xl font-bold ">
          Enter your Info to {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
            className="border rounded-md w-full h-12 p-4 bg-black/30 text-white"
            type="text"
            placeholder="Enter Full Name"
          ></input>
        )}
        <input
          className="border rounded-md w-full h-12 p-4 bg-black/30 text-white"
          type="email"
          placeholder="Enter Email address"
        ></input>
        <input
          className="border rounded-md w-full h-12 p-4 bg-black/30 text-white"
          type="password"
          placeholder="Enter Your Password"
        ></input>
        <button
          className="h-12 w-full text-white bg-red-600 rounded text-xl font-bold hover:bg-red-800"
          type="Submit"
        >
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        <p className="cursor-pointer" onClick={toogleSignInForm}>
          {isSignInForm
            ? "New to Netflix?,SignUp Now"
            : "Already a Member ,SignIn"}
        </p>
      </form>
    </div>
  );
};

export default Login;
